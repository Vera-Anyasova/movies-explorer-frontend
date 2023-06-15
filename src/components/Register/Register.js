import React from "react";
import Authorization from "../Authorization/Authorization";

import "../Register/Register.css";

function Register() {
  return (
    <Authorization
      name="register"
      title="Добро пожаловать!"
      textButton="Зарегистрироваться"
      text="Уже зарегистрированы?"
      pathEdit=""
      path="/sign-in"
      textLink="Войти"
    ></Authorization>
  );
}

export default Register;
