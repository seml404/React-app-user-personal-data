import React, { useState } from "react";
import DropDownElement from "./DropdownElement";

export default function PersonalDetailsForm() {
  let [userDetails, setUserDetails] = useState({
    userSurname: "",
    userFirstName: "",
    userMiddleName: "",
    userCity: "",
    dayOfBirth: "",
    monthOfBirth: "",
    yearOfBirth: "",
    userSelfDescription: "",
  });

  function handleInputChange(event, input) {
    setUserDetails((prev) => {
      return {
        ...prev,
        [input]: event.target.value,
      };
    });
  }

  function handleAddEvent(e) {
    e.preventDefault();
    // postEvents("http://localhost:3000/events", eventDetails);
    console.log(userDetails);
  }

  let citySelect = {
    default: "Ваш город",
    options: ["Москва", "Санкт-Петербург", "Воронеж"],
  };

  return (
    <div className="UserDetailsWrapper">
      <h2>Информация базового профиля</h2>
      <p>Заполните информацию профиля.</p>
      <p>Это даст Вам возможность пользоваться сервисом</p>
      <form onSubmit={(e) => handleAddEvent(e)}>
        <input
          value={userDetails.userSurname}
          type="text"
          placeholder="Фамилия"
          onChange={(e) => handleInputChange(e, "userSurname")}
        ></input>
        <input
          value={userDetails.userFirstName}
          type="text"
          placeholder="Имя"
          onChange={(e) => handleInputChange(e, "userFirstName")}
        ></input>
        <input
          value={userDetails.userMiddleName}
          type="text"
          placeholder="Отчество"
          onChange={(e) => handleInputChange(e, "userMiddleName")}
        ></input>
        <DropDownElement selectDetails={citySelect}></DropDownElement>
        <textarea
          value={userDetails.userSelfDescription}
          placeholder="Напишите о себе"
          onChange={(e) => handleInputChange(e, "userSelfDescription")}
        ></textarea>
        <button onClick={(e) => handleAddEvent(e)}>
          Завершить регистрацию
        </button>
      </form>
    </div>
  );
}
