import React from "react";

function ImagePopup({ card, onClose }) {
  const isOpen = card && "popup_opened";
  function handleClickClose() {
    onClose();
  }
  return (
    <div className={`popup popup_type_photo ${isOpen}`}>
      <div className="popup__container_photo">
        <img
          className="popup__picture"
          src={card ? card.link : "#"}
          alt={card ? card.name : ""}
        />
        <h3 className="popup__caption">{card ? card.name : ""}</h3>
        <button
          type="button"
          className="popup__close"
          onClick={handleClickClose}
        ></button>
      </div>
    </div>
  );
}
export default ImagePopup;
