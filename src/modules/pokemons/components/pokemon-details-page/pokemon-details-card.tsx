import MeasurementCard from "@/modules/pokemons/components/pokemon-details-page/measurement-card";
import StatBar from "@/modules/pokemons/components/pokemon-details-page/stat-bar";
import { TypeBadges } from "@/modules/pokemons/components/pokemon-details-page/type-badges";
import type { PokemonDetails } from "@/modules/pokemons/types";
import {
  HEIGHT_TO_METERS,
  WEIGHT_TO_KG,
} from "@/modules/pokemons/utils/constants";
import { formatStatLabel } from "@/modules/pokemons/utils/helpers";
import {
  Badge,
  Box,
  Card,
  Divider,
  Grid,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { CiLineHeight } from "react-icons/ci";
import { RiWeightLine } from "react-icons/ri";

interface PokemonDetailsCardProps {
  pokemon: PokemonDetails;
}

export default function PokemonDetailsCard({
  pokemon,
}: PokemonDetailsCardProps) {
  const artworkSrc =
    pokemon.sprites.other?.["official-artwork"]?.front_default ??
    pokemon.sprites.front_default;

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
            <div className="rounded-full bg-gray-color p-10 border border-border-color">
              <Image src={artworkSrc} h={220} fit="contain" />
            </div>

            <TypeBadges types={pokemon.types} />

            <Group grow w="100%">
              <MeasurementCard
                icon={<CiLineHeight size={15} />}
                label="Height"
                value={`${pokemon.height / HEIGHT_TO_METERS} m`}
              />
              <MeasurementCard
                icon={<RiWeightLine size={15} />}
                label="Weight"
                value={`${pokemon.weight / WEIGHT_TO_KG} kg`}
              />
            </Group>
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 7 }}>
          <Stack p="xl">
            <Title order={3}>Base Stats</Title>

            {pokemon.stats.map((stat) => (
              <StatBar
                key={stat.stat.name}
                label={formatStatLabel(stat.stat.name)}
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
