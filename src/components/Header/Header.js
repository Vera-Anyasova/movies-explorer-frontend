import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import HeaderMovies from "./HeaderMovies/HeaderMovies";

import "../Header/Header.css";

function Header() {
  return (
    <header className="header">
      <Routes>
        <Route
          path="/"
          element={
            <div className="header__main">
              <nav className="header__menu">
                <NavLink to="/" className="header__logo"></NavLink>
                <NavLink to="/sign-in" className="header__link">
                  Регистрация
                </NavLink>
                <NavLink to="/sign-in" className="header__link-button">
                  <button
                    type="button"
                    className="header__button"
                    value="Войти"
                  >
                    Войти
                  </button>
                </NavLink>
              </nav>
            </div>
          }
        />
        <Route path="/movies" element={<HeaderMovies />} />
        <Route path="/saved-movies" element={<HeaderMovies />} />
        <Route path="/profile" element={<HeaderMovies />} />
      </Routes>
    </header>
  );
}

export default Header;
