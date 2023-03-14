import React from "react";
import "./cardChat.css";

export default function CardChat({ chat }) {
  return (
    <div className="card-chat-principal-div">
      <img src={chat.foto} alt={chat.nombre} />
      <div>
        <p>{chat.nombre}</p>
        <span>{chat.mensaje}</span>
      </div>
      {chat.quantity && <p className="quantity-chat">{chat.quantity}</p>}
    </div>
  );
}
