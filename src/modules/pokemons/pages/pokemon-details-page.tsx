import ErrorCard from "@/modules/pokemons/components/error-card";
import PokemonDetailsCard from "@/modules/pokemons/components/pokemon-details-page/pokemon-details-card";
import { useSinglePokemonQuery } from "@/modules/pokemons/services/pokemon.queries";
import { URLS } from "@/shared/utils/urls";
import { Button, Skeleton, Stack } from "@mantine/core";
import { IoArrowBack } from "react-icons/io5";
import { Link, useParams } from "react-router";

export default function PokemonDetailsPage() {
  const { id } = useParams();

  const { data, isLoading, error, refetch } = useSinglePokemonQuery(Number(id));

  if (isLoading || !data) {
    return (
      <div className="container py-20">
        <Skeleton height={420} radius="md" />;
      </div>
    );
  }

  if (error) {
    <div className="container py-20">
      <ErrorCard error={error} refetch={refetch} />;
    </div>;
  }

  return (
    <Stack className="container py-20">
      <Button
        component={Link}
        to={URLS.pokemons}
        variant="default"
        w={"fit-content"}
      >
        <IoArrowBack className="me-2" />
        <span>Back To List</span>
      </Button>
      <PokemonDetailsCard pokemon={data} />
    </Stack>
  );
}
