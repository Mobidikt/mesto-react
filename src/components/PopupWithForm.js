import React from "react";

class PopupWithForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={`popup popup_type_${props.name}`}>
        <div className="popup__container">
          <h3 className="popup__title">${props.title}</h3>
          <form className="popup__form" name={props.name} novalidate>
            <button type="submit" className="popup__button">
              Сохранить
            </button>
          </form>
          <button type="button" className="popup__close"></button>
        </div>
      </div>
    );
  }
}
export default PopupWithForm;
