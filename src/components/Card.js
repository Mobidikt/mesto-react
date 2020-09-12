import React from "react";

function Card({ card }) {
  return (
    <li className="card">
      <img className="card__image" src={card.link} alt={card.name} />
      <button
        type="button"
        className="card__btn-delete card__btn-delete_invis"
      ></button>
      <div className="card__text">
        <p className="card__title">{card.name}</p>
        <div className="card__like">
          <button type="button" className="card__btn-like"></button>
          <p className="card__number-likes"></p>
        </div>
      </div>
    </li>
  );
}
export default Card;
