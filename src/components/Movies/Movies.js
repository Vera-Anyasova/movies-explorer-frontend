import React from "react";
import FilterCheckbox from "../Movies/SearchForm/FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import MoviesAddition from "./MoviesAddition/MoviesAddition";

import "../Movies/Movies.css";

function Movies() {
  return (
    <main className="content content__movies">
      <FilterCheckbox></FilterCheckbox>
      <MoviesCardList></MoviesCardList>
      <MoviesAddition></MoviesAddition>
    </main>
  );
}

export default Movies;
