import { Card, Group, Stack, Text } from "@mantine/core";

interface MeasurementCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

export default function MeasurementCard({
  icon,
  label,
  value,
}: MeasurementCardProps) {
  return (
    <Card withBorder radius="md">
      <Stack gap={5} align="center">
        <Group gap={5}>
          {icon}
          <Text size="xs" c="dimmed">
            {label}
          </Text>
        </Group>
        <Text fw={700}>{value}</Text>
      </Stack>
    </Card>
  );
}
