import React from "react";
import SearchForm from "../SearchForm";

import "../FilterCheckbox/FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <SearchForm>
      <label htmlFor="switch" className="searchForm__label-switch">
        Короткометражки
      </label>
      <input
        type="checkbox"
        className="searchForm__item-switch"
        name="switch"
        id="switch"
      />
    </SearchForm>
  );
}

export default FilterCheckbox;
