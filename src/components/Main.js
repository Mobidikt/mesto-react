import React, { useState, useEffect } from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main() {
  function handleEditAvatarClick() {
    const popupAvatar = document.querySelector(".popup_type_avatar");
    popupAvatar.classList.add("popup_opened");
  }
  function handleEditProfileClick() {
    const popupProfile = document.querySelector(".popup_type_profile");
    popupProfile.classList.add("popup_opened");
  }
  function handleAddPlaceClick() {
    const popupAdd = document.querySelector(".popup_type_add-card");
    popupAdd.classList.add("popup_opened");
  }

  const [userName, setUserName] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getInitialUserInfo()
      .then((userInfo) => {
        setUserName(userInfo.name);
        setUserAvatar(userInfo.avatar);
        setUserDescription(userInfo.about);
        api
          .getInitialCards()
          .then((card) => {
            setCards(card);
          })

          .catch((err) => {
            console.log(`Данные карточек не получены. ${err}`);
          });
      })
      .catch((err) => {
        console.log(`Данные о пользователе не получены. ${err}`);
      });
  }, []);
  return (
    <>
      <main className="content">
        <section className="profile">
          <button
            className="profile__btn profile__btn_avatar"
            onClick={handleEditAvatarClick}
          >
            <img
              className="profile__avatar"
              src={userAvatar}
              alt="Аватар пользователя"
            />
          </button>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button
              type="button"
              className="profile__btn profile__btn_edit"
              onClick={handleEditProfileClick}
            ></button>
            <p className="profile__job">{userDescription}</p>
          </div>
          <button
            type="button"
            className="profile__btn profile__btn_add"
            onClick={handleAddPlaceClick}
          ></button>
        </section>
        <section className="place">
          <ul className="place__list">
            {cards.map((card) => (
              <Card card={card} key={card._id} />
            ))}
          </ul>
          <div className="place__placeholder">
            Вы не добавили ещё ни одного места
          </div>
        </section>
      </main>
    </>
  );
}
export default Main;
