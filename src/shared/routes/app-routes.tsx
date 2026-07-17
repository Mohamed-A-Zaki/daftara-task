import { Navigate, Route, Routes } from "react-router";

import BaseLayout from "@/app/layouts/base-layout";
import HomePage from "@/modules/home/pages/home-page";
import NotFoundPage from "@/modules/not-found/pages/not-found-page";
import { URLS } from "../utils/urls";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route index element={<HomePage />} />
      </Route>

      <Route path={URLS.notFound} element={<NotFoundPage />} />
      <Route path={"*"} element={<Navigate to={URLS.notFound} />} />
    </Routes>
  );
}
