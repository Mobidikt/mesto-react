import React from "react";

function ImagePopup() {
  return (
    <div class="popup popup_type_photo">
      <div class="popup__container_photo">
        <img
          class="popup__picture"
          src="#"
          alt="Изображение достопримечательности данного места"
        />
        <h3 class="popup__caption"></h3>

        <button type="button" class="popup__close"></button>
      </div>
    </div>
  );
}
export default ImagePopup;
