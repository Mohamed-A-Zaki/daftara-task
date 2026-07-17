import { useQuery } from "@tanstack/react-query";
import type { PokemonFilters } from "../types";
import { getPokemon, getPokemons } from "./pokemon.api";
import { pokemonsKeys } from "./pokemons.keys";

/***
 * Hook to fetch all pokemons with optional filters
 */
export const useAllPokemonsQuery = (filters?: PokemonFilters) => {
  return useQuery({
    queryKey: pokemonsKeys.list_with_filters(filters || {}),
    queryFn: () => getPokemons(filters),
  });
};

/**
 * Hook to fetch a single pokemon by ID
 */
export const useSinglePokemonQuery = (id: number) => {
  return useQuery({
    queryKey: pokemonsKeys.details(id.toString()),
    queryFn: () => getPokemon(id.toString()),
  });
};
