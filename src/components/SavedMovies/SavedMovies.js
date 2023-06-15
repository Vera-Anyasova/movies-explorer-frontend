import React from "react";
import FilterCheckbox from "../Movies/SearchForm/FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import MoviesAddition from "../Movies/MoviesAddition/MoviesAddition";

import "../SavedMovies/SavedMovies.css";

function SavedMovies() {
  return (
    <div className="savedMovies">
      <FilterCheckbox></FilterCheckbox>
      <MoviesCardList type="saved"></MoviesCardList>
      <MoviesAddition type="saved"></MoviesAddition>
    </div>
  );
}

export default SavedMovies;
