import { LIMIT } from "@/shared/configurations/constants";
import { useState } from "react";
import { useAllPokemonsQuery } from "../services/pokemon.queries";

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
    data
  };
}
