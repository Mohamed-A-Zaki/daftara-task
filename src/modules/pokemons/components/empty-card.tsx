import type { RefetchFunction } from "@/modules/pokemons/types";
import { Button } from "@mantine/core";
import { FaBoxOpen } from "react-icons/fa6";

interface EmptyCardProps {
  refetch: RefetchFunction;
}

export default function EmptyCard({ refetch }: EmptyCardProps) {
  return (
    <div className="flex min-h-100 flex-col items-center justify-center text-center">
      <FaBoxOpen size={72} className="mb-4 text-gray-400" />
      <h2 className="text-xl font-semibold">No Pokémon Found</h2>
      <p className="mt-2 max-w-sm text-gray-500">
        There are no Pokémon to display at the moment.
      </p>
      <Button mt="lg" variant="light" onClick={() => refetch()}>
        Refresh
      </Button>
    </div>
  );
}
