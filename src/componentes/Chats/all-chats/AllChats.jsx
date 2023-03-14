import { Search } from "@mui/icons-material";
import React from "react";
import CardChat from "../cardChat/CardChat";
import "./allChats.css";

const chats = [
  {
    nombre: "Lionel",
    foto: "https://www.baenegocios.com/__export/1671539282948/sites/cronica/img/2022/12/20/messi-campeon-mundial-qatar-2022_1.jpg_792575817.jpg",
    mensaje: "Hola que tal como va eso?",
    quantity: 5,
  },
  {
    nombre: "Lionel",
    foto: "https://www.baenegocios.com/__export/1671539282948/sites/cronica/img/2022/12/20/messi-campeon-mundial-qatar-2022_1.jpg_792575817.jpg",
    mensaje: "Hola que tal como va eso?",
    quantity: 4,
  },
  {
    nombre: "Lionel",
    foto: "https://www.baenegocios.com/__export/1671539282948/sites/cronica/img/2022/12/20/messi-campeon-mundial-qatar-2022_1.jpg_792575817.jpg",
    mensaje: "Hola que tal como va eso?",
    quantity: 1,
  },
  {
    nombre: "Lionel",
    foto: "https://www.baenegocios.com/__export/1671539282948/sites/cronica/img/2022/12/20/messi-campeon-mundial-qatar-2022_1.jpg_792575817.jpg",
    mensaje: "Hola que tal como va eso?",
  },
  {
    nombre: "Lionel",
    foto: "https://www.baenegocios.com/__export/1671539282948/sites/cronica/img/2022/12/20/messi-campeon-mundial-qatar-2022_1.jpg_792575817.jpg",
    mensaje: "Hola que tal como va eso?",
  },
  {
    nombre: "Lionel",
    foto: "https://www.baenegocios.com/__export/1671539282948/sites/cronica/img/2022/12/20/messi-campeon-mundial-qatar-2022_1.jpg_792575817.jpg",
    mensaje: "Hola que tal como va eso?",
  },
  {
    nombre: "Lionel",
    foto: "https://www.baenegocios.com/__export/1671539282948/sites/cronica/img/2022/12/20/messi-campeon-mundial-qatar-2022_1.jpg_792575817.jpg",
    mensaje: "Hola que tal como va eso?",
  },
  {
    nombre: "Lionel",
    foto: "https://www.baenegocios.com/__export/1671539282948/sites/cronica/img/2022/12/20/messi-campeon-mundial-qatar-2022_1.jpg_792575817.jpg",
    mensaje: "Hola que tal como va eso?",
  },
  {
    nombre: "Lionel",
    foto: "https://www.baenegocios.com/__export/1671539282948/sites/cronica/img/2022/12/20/messi-campeon-mundial-qatar-2022_1.jpg_792575817.jpg",
    mensaje: "Hola que tal como va eso?",
  },
  {
    nombre: "Lionel",
    foto: "https://www.baenegocios.com/__export/1671539282948/sites/cronica/img/2022/12/20/messi-campeon-mundial-qatar-2022_1.jpg_792575817.jpg",
    mensaje: "Hola que tal como va eso?",
  },
  {
    nombre: "Lionel",
    foto: "https://www.baenegocios.com/__export/1671539282948/sites/cronica/img/2022/12/20/messi-campeon-mundial-qatar-2022_1.jpg_792575817.jpg",
    mensaje: "Hola que tal como va eso?",
  },
  {
    nombre: "Lionel",
    foto: "https://www.baenegocios.com/__export/1671539282948/sites/cronica/img/2022/12/20/messi-campeon-mundial-qatar-2022_1.jpg_792575817.jpg",
    mensaje: "Hola que tal como va eso?",
  },
  {
    nombre: "Lionel",
    foto: "https://www.baenegocios.com/__export/1671539282948/sites/cronica/img/2022/12/20/messi-campeon-mundial-qatar-2022_1.jpg_792575817.jpg",
    mensaje: "Hola que tal como va eso?",
  },
  {
    nombre: "Lionel",
    foto: "https://www.baenegocios.com/__export/1671539282948/sites/cronica/img/2022/12/20/messi-campeon-mundial-qatar-2022_1.jpg_792575817.jpg",
    mensaje: "Hola que tal como va eso?",
  },
  {
    nombre: "Lionel",
    foto: "https://www.baenegocios.com/__export/1671539282948/sites/cronica/img/2022/12/20/messi-campeon-mundial-qatar-2022_1.jpg_792575817.jpg",
    mensaje: "Hola que tal como va eso?",
  },
];

export default function AllChats() {
  return (
    <div className="all-chats-div">
      <div className="title-all-chats">
        <h2>Mensajes</h2>
        <p>Mis Conversaciones</p>
      </div>
      <div className="input-filter">
        <Search></Search>
        <input placeholder="Buscar" type="text" />
      </div>
      <div>
        <h3>Chats:</h3>
        <div className="div-container-chats">
          {chats.map((chat) => (
            <CardChat chat={chat} />
          ))}
        </div>
      </div>
      <p className="newChat">
            +
      </p>
    </div>
  );
}
