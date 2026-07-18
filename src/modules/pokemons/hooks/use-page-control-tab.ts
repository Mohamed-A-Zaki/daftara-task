import { useAllPokemonsQuery } from "@/modules/pokemons/services/pokemon.queries";
import { LIMIT } from "@/modules/pokemons/utils/constants";
import { useState } from "react";

export default function usePageControlTab() {
  const [activePage, setActivePage] = useState(1);

  const { data, isLoading, error, refetch } = useAllPokemonsQuery({
    limit: LIMIT,
    offset: (activePage - 1) * LIMIT,
  });

  const totalPages = data?.count ? Math.ceil(data.count / LIMIT) : 1;

  return {
    isLoading,
    error,
    LIMIT,
    setActivePage,
    activePage,
    totalPages,
    refetch,
    data,
  };
}
