import React, { useState, useEffect, useContext } from "react";
import api from "../utils/Api";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const [cards, setCards] = useState([]);
  const currentUser = useContext(CurrentUserContext);

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
  return (
    <>
      <main className="content">
        <section className="profile">
          <button
            className="profile__btn profile__btn_avatar"
            onClick={props.onEditAvatar}
          >
            <img
              className="profile__avatar"
              src={currentUser.avatar}
              alt="Аватар пользователя"
            />
          </button>
          <div className="profile__info">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              type="button"
              className="profile__btn profile__btn_edit"
              onClick={props.onEditProfile}
            ></button>
            <p className="profile__job">{currentUser.about}</p>
          </div>
          <button
            type="button"
            className="profile__btn profile__btn_add"
            onClick={props.onAddPlace}
          ></button>
        </section>
        <section className="place">
          <ul className="place__list">
            {cards.map((card) => (
              <Card card={card} key={card._id} onClick={props.onCardClick} />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
export default Main;
