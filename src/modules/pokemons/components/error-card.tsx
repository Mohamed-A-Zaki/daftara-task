import { Alert, Button, Card } from "@mantine/core";
import type {
  QueryObserverResult,
  RefetchOptions,
} from "@tanstack/react-query";
import { FaCircleExclamation } from "react-icons/fa6";
import type { GetPokemonsResponse } from "../types";

interface ErrorCardProps {
  error: Error;
  refetch: (
    options?: RefetchOptions | undefined,
  ) => Promise<QueryObserverResult<NoInfer<GetPokemonsResponse>, Error>>;
}

export default function ErrorCard({ error, refetch }: ErrorCardProps) {
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
