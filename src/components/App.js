import React, { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import api from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isverificationPopupOpen, setverificationPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState("");
  const [cards, setCards] = useState([]);
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
  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
      setCards(newCards);
    });
  }
  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter((c) => c._id !== card._id);
        setCards(newCards);
      })
      .catch((err) => {
        console.log(`Удаление карточки не выполнено. ${err}`);
      });
  }
  // function handleAddPlaceSubmit() {
  //   setCards([...cards, newCard]);
  // }
  useEffect(() => {
    api
      .getInitialCards()
      .then((card) => {
        setCards(card);
      })
      .catch((err) => {
        console.log(`Данные карточек не получены. ${err}`);
      });
  }, []);

  function handleUpdateUser(info) {
    api
      .setUserInfo(info)
      .then((res) => {})
      .catch();
  }

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
          cards={cards}
          handleCardLike={handleCardLike}
          handleCardDelete={handleCardDelete}
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
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
