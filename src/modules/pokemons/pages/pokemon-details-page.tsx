import PokemonDetailsCard from "@/modules/pokemons/components/pokemon-details-page/pokemon-details-card";
import { URLS } from "@/shared/utils/urls";
import { Button, Stack } from "@mantine/core";
import Helmet from "@mongez/react-helmet";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router";

export default function PokemonDetailsPage() {
  return (
    <>
      <Helmet title="Pokemon Details Page" />

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

        <PokemonDetailsCard />
      </Stack>
    </>
  );
}
