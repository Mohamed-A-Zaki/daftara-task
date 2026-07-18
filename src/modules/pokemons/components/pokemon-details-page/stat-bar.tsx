import { MAX_STAT_VALUE } from "@/modules/pokemons/utils/constants";
import { Group, Progress, Text } from "@mantine/core";

interface StatBarProps {
  label: string;
  value: number;
}

export default function StatBar({ label, value }: StatBarProps) {
  return (
    <Group wrap="nowrap">
      <Text w={95} fw={600} size="sm">
        {label}
      </Text>
      <Progress value={(value / MAX_STAT_VALUE) * 100} radius="xl" flex={1} />
      <Text w={30} ta="right" size="sm">
        {value}
      </Text>
    </Group>
  );
}
