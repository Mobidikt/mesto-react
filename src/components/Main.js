import React from "react";
function Main() {
  return (
    <main className="content">
      <section className="profile">
        <button className="profile__btn profile__btn_avatar">
          <img className="profile__avatar" src="#" alt="Аватар пользователя" />
        </button>
        <div className="profile__info">
          <h1 className="profile__name"></h1>
          <button
            type="button"
            className="profile__btn profile__btn_edit"
          ></button>
          <p className="profile__job"></p>
        </div>
        <button
          type="button"
          className="profile__btn profile__btn_add"
        ></button>
      </section>
      <section className="place">
        <ul className="place__list"></ul>
        <div className="place__placeholder">
          Вы не добавили ещё ни одного места
        </div>
      </section>
    </main>
  );
}
export default Main;
