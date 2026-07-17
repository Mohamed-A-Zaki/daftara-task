export interface Pokemon {
  id: string;
  name: string;
}

export interface UpdatePokemonPayload {
  id: string;
  data: Omit<Pokemon, "id">;
}

export interface PokemonFilters {
  limit?: number;
  offset?: number;
}

export interface GetPokemonsResponse {
  count: number;
  next: string;
  previous: null;
  results: {
    name: string;
    url: string;
  }[];
}
