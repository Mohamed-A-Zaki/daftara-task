import {
  Alert,
  Button,
  Card,
  Image,
  Pagination,
  Skeleton,
} from "@mantine/core";
import { useState } from "react";
import { FaBoxOpen, FaCircleExclamation } from "react-icons/fa6";
import { useAllPokemonsQuery } from "../services/pokemon.queries";

const LIMIT = 10;

function getPokemonId(url: string) {
  return url.split("/").filter(Boolean).pop() ?? "";
}

function PokemonCardSkeleton() {
  return (
    <Card padding="lg" radius={5} withBorder className="flex flex-col gap-3">
      <Skeleton height={216} radius="md" />
      <div className="flex flex-col items-center gap-2">
        <Skeleton height={28} width="70%" />
        <Skeleton height={16} width="30%" />
      </div>
    </Card>
  );
}

function PokemonCard({ name, url }: { name: string; url: string }) {
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

export default function PageControlTab() {
  const [activePage, setActivePage] = useState(1);

  const { data, isLoading, error, refetch } = useAllPokemonsQuery({
    limit: LIMIT,
    offset: (activePage - 1) * LIMIT,
  });

  const totalPages = data?.count ? Math.ceil(data.count / LIMIT) : 1;

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: LIMIT }).map((_, index) => (
          <PokemonCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <Card>
        <Alert
          icon={<FaCircleExclamation size={20} />}
          color="red"
          title="Something went wrong"
        >
          <p className="mb-4">{error.message}</p>
          <p className="mb-4">
            We couldn't load the Pokémon list. Please try again.
          </p>
          <Button onClick={() => refetch()}>Try Again</Button>
        </Alert>
      </Card>
    );
  }

  if (!data?.results.length) {
    return (
      <div className="flex min-h-100 flex-col items-center justify-center text-center">
        <FaBoxOpen size={72} className="mb-4 text-gray-400" />
        <h2 className="text-xl font-semibold">No Pokémon Found</h2>
        <p className="mt-2 max-w-sm text-gray-500">
          There are no Pokémon to display at the moment.
        </p>
        <Button
          mt="lg"
          variant="light"
          onClick={() => window.location.reload()}
        >
          Refresh
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5 px:10 lg:px-20">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.results.map((pokemon) => (
          <PokemonCard key={pokemon.url} {...pokemon} />
        ))}
      </div>

      <Pagination
        m="auto"
        value={activePage}
        onChange={setActivePage}
        total={totalPages}
      />
    </div>
  );
}
