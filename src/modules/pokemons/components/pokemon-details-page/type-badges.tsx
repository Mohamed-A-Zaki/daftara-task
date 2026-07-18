import type { GetSinglePokemonResponse } from "@/modules/pokemons/types";
import { TYPE_COLORS } from "@/modules/pokemons/utils/constants";
import { Badge, Group } from "@mantine/core";

interface TypeBadgesProps {
  types: GetSinglePokemonResponse["types"];
}

export function TypeBadges({ types }: TypeBadgesProps) {
  return (
    <Group>
      {types.map((item) => (
        <Badge
          key={item.type.name}
          color={TYPE_COLORS[item.type.name] ?? "gray"}
          radius="xl"
          size="lg"
          tt="capitalize"
        >
          {item.type.name}
        </Badge>
      ))}
    </Group>
  );
}
