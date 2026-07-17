import { Card, Image } from "@mantine/core";

function getPokemonId(url: string) {
  return url.split("/").filter(Boolean).pop() ?? "";
}

export default function PokemonCard({
  name,
  url,
}: {
  name: string;
  url: string;
}) {
  const id = getPokemonId(url);

  return (
    <Card
      padding="lg"
      radius={5}
      withBorder
      className="flex flex-col gap-3 text-center!"
    >
      <div className="bg-gray-color rounded-md">
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          w={200}
          m="auto"
        />
      </div>
      <div>
        <div className="text-xl font-bold">{name}</div>
        <div className="text-gray-500 text-sm">
          #{String(id).padStart(3, "0")}
        </div>
      </div>
    </Card>
  );
}
