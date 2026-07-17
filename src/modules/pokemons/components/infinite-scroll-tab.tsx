import { LIMIT } from "@/shared/configurations/constants";
import { Loader } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import { useAllPokemonsQuery } from "../services/pokemon.queries";
import type { Pokemon } from "../types";
import EmptyCard from "./empty-card";
import ErrorCard from "./error-card";
import PokemonCard from "./pokemon-card";
import PokemonListSkeleton from "./pokemon-list-skeleton";

export default function InfiniteScrollTab() {
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

  if (isLoading && items.length === 0) {
    return <PokemonListSkeleton />;
  }

  if (error && items.length === 0) {
    return <ErrorCard error={error} refetch={refetch} />;
  }

  if (!isLoading && items.length === 0) {
    return <EmptyCard refetch={refetch} />;
  }

  return (
    <div className="flex flex-col gap-5 px:10 lg:px-20">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((pokemon) => (
          <PokemonCard key={pokemon.url} {...pokemon} />
        ))}
      </div>

      {hasMore ? (
        <div ref={sentinelRef} className="flex justify-center py-4">
          {isFetching && <Loader color="blue" />}
        </div>
      ) : (
        items.length > 0 && (
          <p className="text-center text-gray-400 text-sm">
            You've reached the end!
          </p>
        )
      )}
    </div>
  );
}
