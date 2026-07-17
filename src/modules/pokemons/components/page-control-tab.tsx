import { LIMIT } from "@/shared/configurations/constants";
import { Pagination } from "@mantine/core";
import { useState } from "react";
import { useAllPokemonsQuery } from "../services/pokemon.queries";
import EmptyCard from "./empty-card";
import ErrorCard from "./error-card";
import PokemonCard from "./pokemon-card";
import PokemonListSkeleton from "./pokemon-list-skeleton";

export default function PageControlTab() {
  const [activePage, setActivePage] = useState(1);

  const { data, isLoading, error, refetch } = useAllPokemonsQuery({
    limit: LIMIT,
    offset: (activePage - 1) * LIMIT,
  });

  const totalPages = data?.count ? Math.ceil(data.count / LIMIT) : 1;

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
