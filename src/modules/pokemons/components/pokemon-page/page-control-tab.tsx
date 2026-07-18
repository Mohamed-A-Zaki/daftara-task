import EmptyCard from "@/modules/pokemons/components/empty-card";
import ErrorCard from "@/modules/pokemons/components/error-card";
import PokemonCard from "@/modules/pokemons/components/pokemon-page/pokemon-card";
import PokemonListSkeleton from "@/modules/pokemons/components/pokemon-page/pokemon-list-skeleton";
import usePageControlTab from "@/modules/pokemons/hooks/use-page-control-tab";
import { Pagination } from "@mantine/core";

export default function PageControlTab() {
  const {
    activePage,
    error,
    isLoading,
    refetch,
    setActivePage,
    totalPages,
    data,
  } = usePageControlTab();

  if (isLoading) {
    return <PokemonListSkeleton />;
  }

  if (error) {
    return <ErrorCard error={error} refetch={refetch} />;
  }

  if (!data?.results.length) {
    return <EmptyCard refetch={refetch} />;
  }

  return (
    <div className="flex flex-col gap-5 px:10 lg:px-20">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.results.map((pokemon) => (
          <PokemonCard key={pokemon.url} {...pokemon} />
        ))}
      </div>

      <Pagination
        m="auto"
        value={activePage}
        onChange={setActivePage}
        total={totalPages}
      />
    </div>
  );
}
