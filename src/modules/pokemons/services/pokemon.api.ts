import type {
  GetPokemonsResponse,
  GetSinglePokemonResponse,
  PokemonFilters,
} from "@/modules/pokemons/types";
import { apiRoutes } from "@/shared/api/api-routes";
import { endpoint } from "@/shared/api/endpoint";

/**
 * Fetches a list of pokemons from the API with optional filters.
 */
export const getPokemons = async (filters?: PokemonFilters) => {
  return (
    await endpoint.get<GetPokemonsResponse>(apiRoutes.pokemons, {
      params: filters,
    })
  ).data;
};

/**
 * Fetches a single pokemon by ID from the API.
 */
export const getPokemon = async (id: string) => {
  return (
    await endpoint.get<GetSinglePokemonResponse>(`${apiRoutes.pokemons}/${id}`)
  ).data;
};
