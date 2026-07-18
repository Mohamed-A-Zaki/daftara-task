import { STAT_LABELS } from "@/modules/pokemons/utils/constants";

export function getPokemonId(url: string) {
  return url.split("/").filter(Boolean).pop() ?? "";
}

export function formatStatLabel(label: string) {
  return (
    STAT_LABELS[label] ??
    label.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())
  );
}
