import { Menu } from "@mui/material";
import React from "react";
import "./navigationbar.css";

export default function NavigationBar() {
  return (
    <div className="navigation-bar">
      <img src="./svg/menu.svg" alt="" />
      <div className="navigation-bar-icons">
        <div>
          <img src="./svg/perfil.svg" alt="" />
          <p>PERFIL</p>
        </div>
        <div>
          <img src="./svg/reservas.svg" alt="" />
           <p>RESERVAS</p>
        </div>
        <div>
          <img src="./svg/home.svg" alt="" />
           <p>HOME</p>
        </div>
        <div>
          <img src="./svg/store.svg" alt="" />
           <p>STORE</p>
        </div>
        <div>
          <img src="./svg/chat.svg" alt="" />
           <p>CHATS</p>
        </div>
        <div>
          <img src="./svg/settings.svg" alt="" />
           <p>CONFIG</p>
        </div>
      </div>
      <img  src="./svg/logout.svg" alt="logout" />
    </div>
  );
}
