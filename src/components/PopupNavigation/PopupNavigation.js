import React from "react";
import { NavLink } from "react-router-dom";
import account from "../../images/account.svg";

import "../PopupNavigation/PopupNavigation.css";

function PopupNavigation({ isOpen, onClose }) {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__button"
          aria-label="Закрыть форму."
          onClick={onClose}
        ></button>
        <nav className="popup__menu">
          <NavLink to="/" className="popup__link">
            Главная
          </NavLink>
          <NavLink
            to="/movies"
            className="popup__link popup__link_movies"
            onClick={onClose}
          >
            Фильмы
          </NavLink>
          <NavLink to="/saved-movies" className="popup__link" onClick={onClose}>
            Сохранённые фильмы
          </NavLink>
          <NavLink to="/profile" className="popup__link-btn" onClick={onClose}>
            <button
              type="button"
              className="header__btn-account"
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
    </div>
  );
}

export default PopupNavigation;
