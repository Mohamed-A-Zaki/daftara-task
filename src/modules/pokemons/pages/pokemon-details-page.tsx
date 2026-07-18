import { useParams } from "react-router";
import { useSinglePokemonQuery } from "../services/pokemon.queries";

import {
  Badge,
  Box,
  Card,
  Divider,
  Grid,
  Group,
  Image,
  Progress,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { CiLineHeight } from "react-icons/ci";
import { RiWeightLine } from "react-icons/ri";

import { type GetSinglePokemonResponse } from "../types";

interface StatBarProps {
  label: string;
  value: number;
}

export default function PokemonDetailsPage() {
  const { id } = useParams();

  const { data } = useSinglePokemonQuery(Number(id));

  if (!data) {
    return;
  }

  return (
    <div className="container py-20">
      <PokemonDetailsCard pokemon={data} />
    </div>
  );
}

interface Props {
  pokemon: GetSinglePokemonResponse;
}

const typeColors: Record<string, string> = {
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

function PokemonDetailsCard({ pokemon }: Props) {
  return (
    <Card withBorder radius="md" p={0} className="overflow-hidden">
      <Box className="bg-linear-to-r from-violet-600 to-pink-500 py-8 text-center text-white">
        <Title order={2} c="white" tt="capitalize">
          {pokemon.name}
        </Title>

        <Text c="white" opacity={0.8}>
          #{pokemon.id.toString().padStart(3, "0")}
        </Text>
      </Box>

      <Grid>
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Stack align="center" p="xl">
            <Image
              src={
                pokemon.sprites.other?.["official-artwork"]?.front_default ||
                pokemon.sprites.front_default
              }
              h={220}
              fit="contain"
            />

            <Group>
              {pokemon.types.map((item) => (
                <Badge
                  key={item.type.name}
                  color={typeColors[item.type.name] || "gray"}
                  radius="xl"
                  size="lg"
                  tt="capitalize"
                >
                  {item.type.name}
                </Badge>
              ))}
            </Group>

            <Group grow w="100%">
              <Card withBorder radius="md">
                <Stack gap={5} align="center">
                  <Group gap={5}>
                    <CiLineHeight size={15} />
                    <Text size="xs" c="dimmed">
                      Height
                    </Text>
                  </Group>
                  <Text fw={700}>{pokemon.height / 10} m</Text>
                </Stack>
              </Card>

              <Card withBorder radius="md">
                <Stack gap={5} align="center">
                  <Group gap={5}>
                    <RiWeightLine size={15} />
                    <Text size="xs" c="dimmed">
                      Weight
                    </Text>
                  </Group>
                  <Text fw={700}>{pokemon.weight / 10} kg</Text>
                </Stack>
              </Card>
            </Group>
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 7 }}>
          <Stack p="xl">
            <Title order={3}>Base Stats</Title>

            {pokemon.stats.map((stat) => (
              <StatBar
                key={stat.stat.name}
                label={formatLabel(stat.stat.name)}
                value={stat.base_stat}
              />
            ))}

            <Divider />

            <Title order={3}>Abilities</Title>

            <Group>
              {pokemon.abilities.map((ability) => (
                <Badge
                  key={ability.ability.name}
                  variant={ability.is_hidden ? "outline" : "filled"}
                >
                  {ability.ability.name}
                </Badge>
              ))}
            </Group>

            <Divider />

            <Stack gap={0}>
              <Text fw={600}>Base Experience</Text>

              <Text size="xl" fw={700} c="violet">
                {pokemon.base_experience} XP
              </Text>
            </Stack>
          </Stack>
        </Grid.Col>
      </Grid>
    </Card>
  );
}

function StatBar({ label, value }: StatBarProps) {
  return (
    <Group wrap="nowrap">
      <Text w={95} fw={600} size="sm">
        {label}
      </Text>

      <Progress value={(value / 255) * 100} radius="xl" flex={1} />

      <Text w={30} ta="right" size="sm">
        {value}
      </Text>
    </Group>
  );
}

function formatLabel(label: string) {
  switch (label) {
    case "hp":
      return "HP";
    case "special-attack":
      return "Sp. Attack";
    case "special-defense":
      return "Sp. Defense";
    default:
      return label.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase());
  }
}
