import React from "react";

function Card({ card, onClick }) {
  function handleClick() {
    onClick(card);
  }
  return (
    <li className="card">
      <img
        className="card__image"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <button
        type="button"
        className="card__btn-delete card__btn-delete_invis"
      />
      <div className="card__text">
        <p className="card__title">{card.name}</p>
        <div className="card__like">
          <button type="button" className="card__btn-like" />
          <p className="card__number-likes">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}
export default Card;
