import React from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";

function App() {
  return (
    <>
      {/* <body class="root"> */}
      <div className="page">
        <Header />
        <Main />
        <Footer />
        <div class="popup popup_type_profile">
          <div class="popup__container">
            <h3 class="popup__title">Редактировать профиль</h3>
            <form class="popup__form" novalidate>
              <label class="popup__field">
                <input
                  name="name"
                  type="text"
                  placeholder="Имя"
                  class="popup__input popup__input_name"
                  maxlength="40"
                  minlength="2"
                  id="name"
                  required
                />
                <span class="popup__error" id="name-error"></span>
              </label>
              <label class="popup__field">
                <input
                  name="job"
                  type="text"
                  placeholder="О себе"
                  class="popup__input popup__input_job"
                  maxlength="200"
                  minlength="2"
                  id="job"
                  required
                />
                <span class="popup__error" id="job-error"></span>
              </label>
              <button type="submit" class="popup__button">
                Сохранить
              </button>
            </form>
            <button type="button" class="popup__close"></button>
          </div>
        </div>
        <ImagePopup />
        <div class="popup popup_type_add-card">
          <div class="popup__container">
            <h3 class="popup__title">Новое место</h3>
            <form class="popup__form popup__form_mesto" novalidate>
              <label class="popup__field">
                <input
                  name="name"
                  type="text"
                  placeholder="Название"
                  class="popup__input popup__input_mesto"
                  maxlength="30"
                  minlength="1"
                  id="mesto"
                  required
                />
                <span class="popup__error" id="mesto-error"></span>
              </label>
              <label class="popup__field">
                <input
                  name="src"
                  type="url"
                  placeholder="Ссылка на картинку"
                  class="popup__input popup__input_src"
                  id="src"
                  required
                />
                <span class="popup__error" id="src-error"></span>
              </label>
              <button type="submit" class="popup__button">
                Создать
              </button>
            </form>
            <button type="button" class="popup__close"></button>
          </div>
        </div>
        <div class="popup popup_type_verification">
          <div class="popup__container popup__container_verification">
            <h3 class="popup__title popup__title_verification">Вы уверены?</h3>

            <button type="submit" class="popup__button">
              Да
            </button>

            <button type="button" class="popup__close"></button>
          </div>
        </div>
        Popup обновить аватар
        <div class="popup popup_type_avatar">
          <div class="popup__container popup__container_avatar">
            <h3 class="popup__title">Обновить аватар</h3>
            <form class="popup__form popup__form" novalidate>
              <label class="popup__field">
                <input
                  name="avatar"
                  type="url"
                  placeholder="Ссылка на новый аватар"
                  class="popup__input"
                  id="avatar"
                  required
                />
                <span class="popup__error" id="avatar-error"></span>
              </label>
              <button type="submit" class="popup__button">
                Сохранить
              </button>
            </form>
            <button type="button" class="popup__close"></button>
          </div>
        </div>
      </div>

      {/* </body> */}
    </>
  );
}

export default App;
