import React from "react";

import "../SearchForm/SearchForm.css";

function SearchForm({ children }) {
  return (
    <section className="searchForm">
      <form className="searchForm-form">
        <fieldset className="searchForm__input-container">
          <input
            className="searchForm__input"
            id="searchForm-input"
            type="name"
            name="name"
            placeholder="Фильм"
            required
          />
          <button
            className="searchForm__button"
            type="submit"
            name="submit_btn"
            value="Поиск"
          ></button>
        </fieldset>
        <fieldset className="searchForm__input-container searchForm__input-container_checkbox">
          {children}
        </fieldset>
      </form>
      <div className="searchForm__element"></div>
    </section>
  );
}

export default SearchForm;
