import React from "react";
import { Link } from "react-router-dom";
import "./Authorization.css";

function Authorization({
  name,
  nameUser,
  email,
  password,
  title,
  textButton,
  text,
  pathEdit,
  path,
  linkEdit,
  textLink,
}) {
  return (
    <div className={`authorization authorization__${name}`}>
      <Link
        to="/"
        className={`header__logo header__logo_authorization header__logo_authorization-${name}`}
      ></Link>
      <h2 className={`authorization__title authorization__title_${name}`}>
        {title}
      </h2>
      <form
        className={`authorization__form authorization__form_${name}`}
        name="authorization-form"
      >
        <label
          className={`authorization__field authorization__field_${name} authorization__field_${name}-name`}
        >
          Имя
        </label>
        <input
          className={`authorization__input authorization__input_${name} authorization__input_${name}-name `}
          id="name-input"
          name="name"
          type="text"
          minLength="2"
          maxLength="30"
          placeholder={nameUser}
          required
        />
        <span
          className="authorization__item-error"
          id="name-input-error"
        ></span>
        <label
          className={`authorization__field authorization__field_${name} authorization__field_${name}-email`}
        >
          E-mail
        </label>
        <input
          className={`authorization__input authorization__input_${name} authorization__input_${name}-email`}
          id="email-input"
          name="email"
          type="email"
          placeholder={email}
          required
        />
        <span
          className="authorization__item-error"
          id="email-input-error"
        ></span>
        <label
          className={`authorization__field authorization__field_${name} authorization__field_${name}-password`}
        >
          Пароль
        </label>
        <input
          className={`authorization__input authorization__input_${name} authorization__input_${name}-password`}
          id="password-input"
          name="password"
          type="password"
          placeholder={password}
          required
        />
        <span
          className="authorization__item-error"
          id="password-input-error"
        ></span>
        <button
          type="submit"
          className={`authorization__button authorization__button_${name}`}
          name="submit_btn"
          value={textButton}
        >
          {textButton}
        </button>
        <div className={`authorization__item authorization__item_${name}`}>
          <span className={`authorization__text authorization__text_${name}`}>
            {text}
          </span>
          <Link
            to={pathEdit}
            className={`authorization__link authorization__link_${name} authorization__link_${name}-edit`}
          >
            {linkEdit}
          </Link>
          <Link
            to={path}
            className={`authorization__link authorization__link_${name}`}
          >
            {textLink}
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Authorization;
