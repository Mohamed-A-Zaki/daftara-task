import { Loader } from "@mantine/core";
import useInfiniteScrollTab from "../hooks/use-infinite-scroll-tab";
import EmptyCard from "./empty-card";
import ErrorCard from "./error-card";
import PokemonCard from "./pokemon-card";
import PokemonListSkeleton from "./pokemon-list-skeleton";

export default function InfiniteScrollTab() {
  const { error, hasMore, isFetching, isLoading, items, refetch, sentinelRef } =
    useInfiniteScrollTab();

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
