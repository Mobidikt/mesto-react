import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  return (
    <>
      {/* <body class="root"> */}
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
        />
        <Footer />
        <PopupWithForm
          name="profile"
          onClose={false}
          isOpen={isEditProfilePopupOpen}
        />
        <div className="popup popup_type_profile">
          <div className="popup__container">
            <h3 className="popup__title">Редактировать профиль</h3>
            <form className="popup__form" novalidate>
              <label className="popup__field">
                <input
                  name="name"
                  type="text"
                  placeholder="Имя"
                  className="popup__input popup__input_name"
                  maxlength="40"
                  minlength="2"
                  id="name"
                  required
                />
                <span className="popup__error" id="name-error"></span>
              </label>
              <label className="popup__field">
                <input
                  name="job"
                  type="text"
                  placeholder="О себе"
                  className="popup__input popup__input_job"
                  maxlength="200"
                  minlength="2"
                  id="job"
                  required
                />
                <span className="popup__error" id="job-error"></span>
              </label>
              <button type="submit" className="popup__button">
                Сохранить
              </button>
            </form>
            <button type="button" className="popup__close"></button>
          </div>
        </div>
        <ImagePopup />
        <div className="popup popup_type_add-card">
          <div className="popup__container">
            <h3 className="popup__title">Новое место</h3>
            <form className="popup__form popup__form_mesto" novalidate>
              <label className="popup__field">
                <input
                  name="name"
                  type="text"
                  placeholder="Название"
                  className="popup__input popup__input_mesto"
                  maxlength="30"
                  minlength="1"
                  id="mesto"
                  required
                />
                <span className="popup__error" id="mesto-error"></span>
              </label>
              <label className="popup__field">
                <input
                  name="src"
                  type="url"
                  placeholder="Ссылка на картинку"
                  className="popup__input popup__input_src"
                  id="src"
                  required
                />
                <span className="popup__error" id="src-error"></span>
              </label>
              <button type="submit" className="popup__button">
                Создать
              </button>
            </form>
            <button type="button" className="popup__close"></button>
          </div>
        </div>
        <div className="popup popup_type_verification">
          <div className="popup__container popup__container_verification">
            <h3 className="popup__title popup__title_verification">
              Вы уверены?
            </h3>

            <button type="submit" className="popup__button">
              Да
            </button>

            <button type="button" className="popup__close"></button>
          </div>
        </div>
        Popup обновить аватар
        <div className="popup popup_type_avatar">
          <div className="popup__container popup__container_avatar">
            <h3 className="popup__title">Обновить аватар</h3>
            <form className="popup__form popup__form" novalidate>
              <label className="popup__field">
                <input
                  name="avatar"
                  type="url"
                  placeholder="Ссылка на новый аватар"
                  className="popup__input"
                  id="avatar"
                  required
                />
                <span className="popup__error" id="avatar-error"></span>
              </label>
              <button type="submit" className="popup__button">
                Сохранить
              </button>
            </form>
            <button type="button" className="popup__close"></button>
          </div>
        </div>
      </div>

      {/* </body> */}
    </>
  );
}

export default App;
