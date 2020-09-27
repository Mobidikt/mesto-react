import React, { useState, useContext, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name: name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      button_text="Сохранить"
      onClose={props.onClose}
      isOpen={props.isOpen}
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input
          name="name"
          type="text"
          placeholder="Имя"
          className="popup__input popup__input_name"
          maxLength="40"
          minLength="2"
          id="name"
          required
          value={name}
          onChange={handleNameChange}
        />
        <span className="popup__error" id="name-error" />
      </label>
      <label className="popup__field">
        <input
          name="job"
          type="text"
          placeholder="О себе"
          className="popup__input popup__input_job"
          maxLength="200"
          minLength="2"
          id="job"
          required
          value={description}
          onChange={handleDescriptionChange}
        />

        <span className="popup__error" id="job-error" />
      </label>
    </PopupWithForm>
  );
}
export default EditProfilePopup;
