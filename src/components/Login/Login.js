import React from "react";
import Authorization from "../Authorization/Authorization";

import "../Login/Login.css";

function Login() {
  return (
    <Authorization
      name="login"
      title="Рады видеть!"
      textButton="Войти"
      text="Ещё не зарегистрированы?"
      pathEdit="/profile"
      path="/sign-up"
      textLink="Регистрация"
    ></Authorization>
  );
}

export default Login;
