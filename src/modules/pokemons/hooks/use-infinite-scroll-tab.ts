import { useAllPokemonsQuery } from "@/modules/pokemons/services/pokemon.queries";
import type { Pokemon } from "@/modules/pokemons/types";
import { LIMIT } from "@/modules/pokemons/utils/constants";
import { useEffect, useRef, useState } from "react";

export default function useInfiniteScrollTab() {
  const [offset, setOffset] = useState(0);
  const [items, setItems] = useState<Pokemon[]>([]);
  const [hasMore, setHasMore] = useState(true);

  const { data, isLoading, isFetching, error, refetch } = useAllPokemonsQuery({
    limit: LIMIT,
    offset,
  });

  const observerRef = useRef<IntersectionObserver | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  // merge each page into the accumulated list
  useEffect(() => {
    if (!data) return;

    setItems((prev) => {
      if (offset === 0) return data.results;
      const existingUrls = new Set(prev.map((p) => p.url));
      const newOnes = data.results.filter((p) => !existingUrls.has(p.url));
      return [...prev, ...newOnes];
    });

    setHasMore(Boolean(data.next));
  }, [data, offset]);

  // observe the sentinel to trigger the next page
  useEffect(() => {
    if (!sentinelRef.current || !hasMore || isFetching) return;

    observerRef.current?.disconnect();
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setOffset((prev) => prev + LIMIT);
        }
      },
      { rootMargin: "50px" },
    );
    observerRef.current.observe(sentinelRef.current);

    return () => observerRef.current?.disconnect();
  }, [hasMore, isFetching, items.length]);

  return {
    items,
    isLoading,
    error,
    isFetching,
    hasMore,
    sentinelRef,
    refetch,
  };
}
