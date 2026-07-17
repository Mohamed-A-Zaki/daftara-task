import { Button } from "@mantine/core";
import Helmet from "@mongez/react-helmet";
import { useState } from "react";
import InfiniteScrollTab from "../components/infinite-scroll-tab";
import PageControlTab from "../components/page-control-tab";
import type { TabKey } from "../types";

const TABS: { key: TabKey; label: string }[] = [
  { key: "page-control", label: "Page Controls" },
  { key: "infinite-scroll", label: "Infinite Scroll" },
];

export default function PokemonsPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("page-control");

  return (
    <>
      <Helmet title="Pokemon Page" />

      <div className="container bg-gray-color p-5 rounded-md border-border-color border my-10">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl text-center font-bold">Pokédex</h1>
          <div className="text-gray-500 mx-auto text-center text-[14px]">
            Discover and explore Pokemon with page controls
          </div>

          <div className="flex items-center gap-3 justify-center">
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
          </div>

          {activeTab === "page-control" ? (
            <PageControlTab />
          ) : (
            <InfiniteScrollTab />
          )}
        </div>
      </div>
    </>
  );
}
