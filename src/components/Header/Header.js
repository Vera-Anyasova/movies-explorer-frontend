import React from "react";
import { Route, Routes, NavLink, Link, useLocation } from "react-router-dom";
import account from "../../images/account.svg";

import "../Header/Header.css";

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  function changeMenu() {
    setIsOpen(!isOpen);
  }

  function onClose() {
    setIsOpen(false);
  }

  const location = useLocation();

  return (
    (location.pathname === "/" ||
      location.pathname === "/movies" ||
      location.pathname === "/saved-movies" ||
      location.pathname === "/profile") && (
      <header
        className={`header ${isOpen ? "header__container_movies-opened" : ""}`}
      >
        <Link to="/" className="header__logo"></Link>
        <Routes>
          <Route
            path="/"
            element={
              <div className="header__container header__container_home">
                <nav className="header__menu header__menu_home">
                  <NavLink
                    to="/sign-in"
                    className="header__link header__link_home"
                  >
                    Регистрация
                  </NavLink>
                  <NavLink to="/sign-in" className="header__link">
                    <button
                      type="button"
                      className="header__button header__button_login"
                      value="Войти"
                    >
                      Войти
                    </button>
                  </NavLink>
                </nav>
              </div>
            }
          />
          <Route
            path="/movies"
            element={
              <>
                <button
                  type="button"
                  aria-label="Меню."
                  className="header__burger-btn"
                  value="Меню"
                  onClick={changeMenu}
                ></button>
                <div className="header__container header__container_movies">
                  <nav className="header__menu header__menu_movies">
                    <button
                      type="button"
                      className="header__btn-close"
                      aria-label="Закрыть форму."
                      onClick={onClose}
                    ></button>
                    <NavLink
                      to="/"
                      className="header__link header__link_main"
                      onClick={onClose}
                    >
                      Главная
                    </NavLink>
                    <NavLink
                      to="/movies"
                      className="header__link header__link_movies header__link_movies-whole"
                      onClick={onClose}
                    >
                      Фильмы
                    </NavLink>
                    <NavLink
                      to="/saved-movies"
                      className="header__link header__link_movies header__link_movies-saved"
                      onClick={onClose}
                    >
                      Сохранённые фильмы
                    </NavLink>
                    <NavLink
                      to="/profile"
                      className="header__link header__link-profile"
                      onClick={onClose}
                    >
                      <button
                        type="button"
                        className="header__button header__button_account"
                        value="Аккаунт"
                      >
                        <img
                          src={account}
                          alt="Иконка аккаунта."
                          className="header__icon"
                        />
                        Аккаунт
                      </button>
                    </NavLink>
                  </nav>
                </div>
              </>
            }
          />
          <Route
            path="/saved-movies"
            element={
              <>
                <button
                  type="button"
                  aria-label="Меню."
                  className="header__burger-btn"
                  value="Меню"
                  onClick={changeMenu}
                ></button>
                <div className="header__container header__container_movies">
                  <nav className="header__menu header__menu_movies">
                    <button
                      type="button"
                      className="header__btn-close"
                      aria-label="Закрыть форму."
                      onClick={onClose}
                    ></button>
                    <NavLink
                      to="/"
                      className="header__link header__link_main"
                      onClick={onClose}
                    >
                      Главная
                    </NavLink>
                    <NavLink
                      to="/movies"
                      className="header__link header__link_movies header__link_movies-whole"
                      onClick={onClose}
                    >
                      Фильмы
                    </NavLink>
                    <NavLink
                      to="/saved-movies"
                      className="header__link header__link_movies header__link_movies-saved"
                      onClick={onClose}
                    >
                      Сохранённые фильмы
                    </NavLink>
                    <NavLink
                      to="/profile"
                      className="header__link header__link-profile"
                      onClick={onClose}
                    >
                      <button
                        type="button"
                        className="header__button header__button_account"
                        value="Аккаунт"
                      >
                        <img
                          src={account}
                          alt="Иконка аккаунта."
                          className="header__icon"
                        />
                        Аккаунт
                      </button>
                    </NavLink>
                  </nav>
                </div>
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <button
                  type="button"
                  aria-label="Меню."
                  className="header__burger-btn"
                  value="Меню"
                  onClick={changeMenu}
                ></button>
                <div className="header__container header__container_movies">
                  <nav className="header__menu header__menu_movies">
                    <button
                      type="button"
                      className="header__btn-close"
                      aria-label="Закрыть форму."
                      onClick={onClose}
                    ></button>
                    <NavLink
                      to="/"
                      className="header__link header__link_main"
                      onClick={onClose}
                    >
                      Главная
                    </NavLink>
                    <NavLink
                      to="/movies"
                      className="header__link header__link_movies header__link_movies-whole"
                      onClick={onClose}
                    >
                      Фильмы
                    </NavLink>
                    <NavLink
                      to="/saved-movies"
                      className="header__link header__link_movies header__link_movies-saved"
                      onClick={onClose}
                    >
                      Сохранённые фильмы
                    </NavLink>
                    <NavLink
                      to="/profile"
                      className="header__link header__link-profile"
                      onClick={onClose}
                    >
                      <button
                        type="button"
                        className="header__button header__button_account"
                        value="Аккаунт"
                      >
                        <img
                          src={account}
                          alt="Иконка аккаунта."
                          className="header__icon"
                        />
                        Аккаунт
                      </button>
                    </NavLink>
                  </nav>
                </div>
              </>
            }
          />
        </Routes>
      </header>
    )
  );
}

export default Header;
