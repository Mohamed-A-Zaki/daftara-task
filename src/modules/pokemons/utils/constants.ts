import type { TabKey } from "@/modules/pokemons/types";

export const LIMIT = 10;

export const TYPE_COLORS: Record<string, string> = {
  normal: "gray",
  fire: "red",
  water: "blue",
  electric: "yellow",
  grass: "green",
  ice: "cyan",
  fighting: "orange",
  poison: "violet",
  ground: "yellow",
  flying: "indigo",
  psychic: "pink",
  bug: "lime",
  rock: "gray",
  ghost: "dark",
  dragon: "grape",
  dark: "dark",
  steel: "gray",
  fairy: "pink",
};

export const STAT_LABELS: Record<string, string> = {
  hp: "HP",
  "special-attack": "Sp. Attack",
  "special-defense": "Sp. Defense",
};

export const MAX_STAT_VALUE = 255;
// Height/weight come from the API in decimeters/hectograms
export const HEIGHT_TO_METERS = 10;
export const WEIGHT_TO_KG = 10;

export const TABS: { key: TabKey; label: string }[] = [
  { key: "page-control", label: "Page Controls" },
  { key: "infinite-scroll", label: "Infinite Scroll" },
];
