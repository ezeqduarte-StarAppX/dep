import React from "react";
import AllChats from "../../componentes/Chats/all-chats/AllChats";
import PrincipalChat from "../../componentes/Chats/PrincipalChat/PrincipalChat";
import "./chat.css";

export default function Chats() {
  return (
    <div className="principal-div-chats">
      <AllChats />
      <PrincipalChat />
    </div>
  );
}
