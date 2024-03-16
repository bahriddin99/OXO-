import React from "react";
import { Caterogiya } from "./components/caterogiya";
import { Maxsus } from "./components/maxsus";
import { SearchHeader } from "../../componets/search/search-header";

export const Home = () => {
  return (
    <div>
      <SearchHeader />
      <Caterogiya />
      <Maxsus />
    </div>
  );
};
