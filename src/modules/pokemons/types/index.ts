export interface PokemonFilters {
  limit?: number;
  offset?: number;
}

export interface GetPokemonsResponse {
  count: number;
  next: string;
  previous: null;
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
}
