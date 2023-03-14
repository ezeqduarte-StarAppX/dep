import React from "react";
import "./InputDate.css"

export default function InputDate() {
  return (
    <div className="dates-user">
      <img
        className="pic-user"
        src="https://images.unsplash.com/photo-1572540688236-4eb938e8c099?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80"
        alt="foto-usuario"
      />
      <div>
        <p className="username">Jorge Oscar</p>
        <p className="tagname">@jorgeoscar</p>
      </div>
      <img src="./svg/NotificationOn.svg" alt="notificacion" />
    </div>
  );
}
