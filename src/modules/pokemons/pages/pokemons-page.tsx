import PageControlTab from "@/modules/pokemons//components/pokemon-page/page-control-tab";
import InfiniteScrollTab from "@/modules/pokemons/components/pokemon-page/infinite-scroll-tab";
import type { TabKey } from "@/modules/pokemons/types";
import { TABS } from "@/modules/pokemons/utils/constants";
import { Button, Group, Stack } from "@mantine/core";
import Helmet from "@mongez/react-helmet";
import { useState } from "react";

export default function PokemonsPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("page-control");

  return (
    <>
      <Helmet title="Pokemon Page" />

      <div className="container bg-gray-color p-5 rounded-md border-border-color border my-10">
        <Stack>
          <h1 className="text-2xl text-center font-bold">Pokédex</h1>
          <div className="text-gray-500 mx-auto text-center text-[14px]">
            Discover and explore Pokemon with page controls
          </div>

          <Group justify="center">
            {TABS.map(({ key, label }) => (
              <Button
                key={key}
                className={`${
                  activeTab === key
                    ? "bg-primary-500! text-white!"
                    : "bg-white! text-primary-500!"
                } border! border-border-color!`}
                onClick={() => setActiveTab(key)}
              >
                {label}
              </Button>
            ))}
          </Group>

          {activeTab === "page-control" ? (
            <PageControlTab />
          ) : (
            <InfiniteScrollTab />
          )}
        </Stack>
      </div>
    </>
  );
}
