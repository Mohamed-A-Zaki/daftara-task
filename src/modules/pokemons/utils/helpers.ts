import { STAT_LABELS } from "@/modules/pokemons/utils/constants";

export function getPokemonId(url: string): string {
  return url.split("/").filter(Boolean).pop() ?? "";
}

export function formatStatLabel(label: string): string {
  return (
    STAT_LABELS[label] ??
    label.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())
  );
}
