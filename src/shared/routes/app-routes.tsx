import { Navigate, Route, Routes } from "react-router";

import NotFoundPage from "@/modules/not-found/pages/not-found-page";
import PokemonDetailsPage from "@/modules/pokemons/pages/pokemon-details-page";
import PokemonsPage from "@/modules/pokemons/pages/pokemons-page";
import { URLS } from "../utils/urls";

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path={URLS.home}
        element={<Navigate to={URLS.pokemons} replace />}
      />
      <Route path={URLS.pokemons} element={<PokemonsPage />} />
      <Route path={URLS.pokemonDetails} element={<PokemonDetailsPage />} />

      <Route path={URLS.notFound} element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to={URLS.notFound} replace />} />
    </Routes>
  );
}
