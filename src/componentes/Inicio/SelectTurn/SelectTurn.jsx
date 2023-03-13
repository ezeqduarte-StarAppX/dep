import { CloseOutlined } from "@mui/icons-material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import navegationActions from "../../../redux/actions/navegationActions";
import CardSelectTurn from "../cardSelectTurn/CardSelectTurn";
import "./selectTurn.css";

export default function SelectTurn({ club, hora }) {
  let { reservarHorarioPop } = useSelector((store) => store.navegationReducer);


  const dispatch = useDispatch();

  const chooseTurn = () => {
    dispatch(navegationActions.reservarHorario());
   
  };


  if (reservarHorarioPop) {
    return (
      <div className="select-turn">
        <p>{club.nombreClub}</p>
        <div id="close-select-turn" onClick={chooseTurn}>
          <CloseOutlined />
        </div>
        <span>60 min</span>
        <div className="options-select-turn">
          <CardSelectTurn club={club}></CardSelectTurn>
          <CardSelectTurn club={club}></CardSelectTurn>
          <CardSelectTurn club={club}></CardSelectTurn>
        </div>
        <p id="next-to-pay">Elegir turnos 20:00 - 21: 00</p>
      </div>
    );
  }
}
