import {ReactElement} from "react";
import {Routes, Route} from "react-router-dom";
import CatFactsPage from "../pages/CatFactsPage";
import Layout from "../pages/Layout";
import FavouritesPage from "../pages/FavouritesPage";
export const RouterRoutes = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<CatFactsPage />} />
          <Route path="favourites" element={<FavouritesPage />} />
      </Route>
    </Routes>
  );
};
