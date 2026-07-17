import type { PokemonFilters } from "../types";

export const pokemonsKeys = {
  /**
   * Get the base key for all users queries
   */
  all: () => {
    return ["pokemons"] as const;
  },
  /**
   * Get the key for the users list query
   */
  list: () => {
    return [...pokemonsKeys.all(), "list"] as const;
  },
  /**
   * Get the key for the users list query with filters
   */
  list_with_filters: (filters?: PokemonFilters) => {
    return [...pokemonsKeys.list(), filters] as const;
  },
  /**
   * Get the key for the single user query by ID
   */
  details: (id: string) => {
    return [...pokemonsKeys.all(), "details", id] as const;
  },
};
