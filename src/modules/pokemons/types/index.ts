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

export interface GetSinglePokemonResponse {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  sprites: {
    front_default: string;
    other?: {
      "official-artwork"?: {
        front_default: string;
      };
    };
  };
  types: {
    slot: number;
    type: {
      name: string;
    };
  }[];
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];

  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
}

export interface Pokemon {
  name: string;
  url: string;
}

export type TabKey = "page-control" | "infinite-scroll";
