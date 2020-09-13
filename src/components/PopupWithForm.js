import React from "react";

class PopupWithForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: this.props.isOpen,
      onClose: this.props.onClose,
    };
  }
  render() {
    return (
      <div
        className={`popup popup_type_${this.props.name} ${this.state.isOpen}`}
      >
        <div className="popup__container">
          <h3 className="popup__title">${this.props.title}</h3>
          <form className="popup__form" name={this.props.name} novalidate>
            {this.props.children}
            <button type="submit" className="popup__button">
              Сохранить
            </button>
          </form>
          <button
            type="button"
            className="popup__close"
            onClick={this._handleCloseClick}
          ></button>
        </div>
      </div>
    );
  }
}
export default PopupWithForm;
