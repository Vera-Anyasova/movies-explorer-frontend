import React from "react";
import { NavLink } from "react-router-dom";
import account from "../../../images/account.svg";

import "../HeaderMovies/HeaderMovies.css";
import PopupNavigation from "../../PopupNavigation/PopupNavigation";

function HeaderMovies() {
  const [isOpen, setIsOpen] = React.useState(false);

  function changeMenu() {
    setIsOpen(!isOpen);
  }

  function closePopup() {
    setIsOpen(false);
  }

  return (
    <div className="header__movies">
      <nav className="header__menu header__menu_movies">
        <NavLink to="/" className="header__logo"></NavLink>
        <NavLink
          to="/movies"
          className="header__movies-link header__movies-link_home"
        >
          Фильмы
        </NavLink>
        <NavLink
          to="/saved-movies"
          className="header__movies-link header__movies-link_saved"
        >
          Сохранённые фильмы
        </NavLink>
        <NavLink to="/profile" className="header__link-btn">
          <button type="button" className="header__btn-account" value="Аккаунт">
            <img
              src={account}
              alt="Иконка аккаунта."
              className="header__icon"
            />
            Аккаунт
          </button>
        </NavLink>
      </nav>
      <div className="header__burger-menu">
        <button
          type="button"
          aria-label="Меню."
          className="header__burger-btn"
          value="Меню"
          onClick={changeMenu}
        ></button>
        <PopupNavigation isOpen={isOpen} onClose={closePopup}></PopupNavigation>
      </div>
    </div>
  );
}

export default HeaderMovies;
