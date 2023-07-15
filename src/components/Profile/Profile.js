import React from "react";
import Authorization from "../Authorization/Authorization";

import "../Profile/Profile.css";

function Profile() {
  return (
    <Authorization
      name="profile"
      nameUser="Виталий"
      email="pochta@yandex.ru"
      title="Привет, Виталий!"
      pathEdit="/profile"
      path="/sign-in"
      linkEdit="Редактировать"
      textLink="Выйти из аккаунта"
      textButton="Сохранить"
    ></Authorization>
  );
}

export default Profile;
