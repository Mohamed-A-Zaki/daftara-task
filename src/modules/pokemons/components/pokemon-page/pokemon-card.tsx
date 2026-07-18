import { getPokemonId } from "@/modules/pokemons/utils/helpers";
import { URLS } from "@/shared/utils/urls";
import { Card, Image, Stack } from "@mantine/core";
import { Link } from "react-router";

interface PokemonCardProps {
  name: string;
  url: string;
}

export default function PokemonCard({ name, url }: PokemonCardProps) {
  const id = getPokemonId(url);

  return (
    <Card
      padding="lg"
      radius={5}
      withBorder
      component={Link}
      to={URLS.pokemonDetailsPath(+id)}
    >
      <div className="bg-gray-color rounded-md">
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          w={200}
          m="auto"
        />
      </div>
      <Stack gap={0} align="center">
        <div className="text-xl font-bold">{name}</div>
        <div className="text-gray-500 text-sm">
          #{String(id).padStart(3, "0")}
        </div>
      </Stack>
    </Card>
  );
}
