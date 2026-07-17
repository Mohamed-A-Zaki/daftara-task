import { useQuery } from "@tanstack/react-query";
import type { PokemonFilters } from "../types";
import { getPokemon, getPokemons } from "./pokemon.api";
import { pokemonsKeys } from "./pokemons.keys";

/***
 * Hook to fetch all users with optional filters
 */
export const useAllPokemonsQuery = (filters?: PokemonFilters) => {
  return useQuery({
    queryKey: pokemonsKeys.list_with_filters(filters || {}),
    queryFn: () => getPokemons(filters),
  });
};

/**
 * Hook to fetch a single user by ID
 */
export const useSinglePokemonQuery = (id: number) => {
  return useQuery({
    queryKey: pokemonsKeys.details(id.toString()),
    queryFn: () => getPokemon(id.toString()),
  });
};
