import React, { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import api from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isverificationPopupOpen, setverificationPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState("");
  useEffect(() => {
    api
      .getUserInfo()
      .then((userInfo) => {
        setCurrentUser(userInfo);
      })
      .catch((err) => {
        console.log(`Данные о пользователе не получены. ${err}`);
      });
  }, []);
  function handleEsc(e) {
    if (e.key === "Escape") {
      closeAllPopups();
    }
  }
  function overlayClose(e) {
    if (e.target.classList.contains("popup")) {
      closeAllPopups();
    }
  }
  function setEventListeners() {
    document.addEventListener("keydown", handleEsc);
    document.addEventListener("click", overlayClose);
  }
  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
    setEventListeners();
  }
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
    setEventListeners();
  }
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
    setEventListeners();
  }
  function handleCardClick(card) {
    setSelectedCard(card);
    setEventListeners();
  }
  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setverificationPopupOpen(false);
    setSelectedCard(null);
    document.removeEventListener("keydown", handleEsc);
    document.removeEventListener("click", overlayClose);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          name="profile"
          title="Редактировать профиль"
          button_text="Сохранить"
          onClose={closeAllPopups}
          isOpen={isEditProfilePopupOpen}
        >
          <label className="popup__field">
            <input
              name="name"
              type="text"
              placeholder="Имя"
              className="popup__input popup__input_name"
              maxLength="40"
              minLength="2"
              id="name"
              required
            />
            <span className="popup__error" id="name-error" />
          </label>
          <label className="popup__field">
            <input
              name="job"
              type="text"
              placeholder="О себе"
              className="popup__input popup__input_job"
              maxLength="200"
              minLength="2"
              id="job"
              required
            />
            <span className="popup__error" id="job-error" />
          </label>
        </PopupWithForm>
        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          button_text="Сохранить"
          onClose={closeAllPopups}
          isOpen={isEditAvatarPopupOpen}
        >
          <label className="popup__field">
            <input
              name="avatar"
              type="url"
              placeholder="Ссылка на новый аватар"
              className="popup__input"
              id="avatar"
              required
            />
            <span className="popup__error" id="avatar-error" />
          </label>
        </PopupWithForm>
        <PopupWithForm
          name="add-card"
          title="Новое место"
          button_text="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__field">
            <input
              name="name"
              type="text"
              placeholder="Название"
              className="popup__input popup__input_mesto"
              maxLength="30"
              minLength="1"
              id="mesto"
              required
            />
            <span className="popup__error" id="mesto-error" />
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
            <span className="popup__error" id="src-error" />
          </label>
        </PopupWithForm>
        <PopupWithForm
          name="verification"
          title="Вы уверены?"
          button_text="Да"
          isOpen={isverificationPopupOpen}
          onClose={closeAllPopups}
        ></PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
