import { LIMIT } from "@/shared/configurations/constants";
import { Card, Skeleton } from "@mantine/core";

export default function PokemonListSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: LIMIT }).map((_, index) => (
        <Card
          key={index}
          padding="lg"
          radius={5}
          withBorder
          className="flex flex-col gap-3"
        >
          <Skeleton height={216} radius="md" />
          <div className="flex flex-col items-center gap-2">
            <Skeleton height={28} width="70%" />
            <Skeleton height={16} width="30%" />
          </div>
        </Card>
      ))}
    </div>
  );
}
