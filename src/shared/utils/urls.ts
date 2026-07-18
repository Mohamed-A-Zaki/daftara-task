export const URLS = {
  home: "/",

  pokemons: "/pokemons",
  pokemonDetails: "/pokemons/:id",
  pokemonDetailsPath: (id: number) => `/pokemons/${id}`,

  notFound: "/404",
} as const;
