import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./cardFilterClub.css";
import navegationActions from "../../../redux/actions/navegationActions";
import SelectTurn from "../SelectTurn/SelectTurn";

export default function CardFilterClub({ club }) {
  let { reservarHorarioPop } = useSelector((store) => store.navegationReducer);

  const dispatch = useDispatch();

  const chooseTurn = () => {
    dispatch(navegationActions.reservarHorario());
    console.log(reservarHorarioPop);
  };

  return (
    <>
      <SelectTurn club={club}></SelectTurn>
      <div className="card-filter-club" >
        <img
          src="https://alquilatucancha.com/uploads/clubs/bg/irlandes-gba-norte.jpeg?875941"
          alt="foto-cancha"
        />
        <div className="filter-img-card-filter-club" />
        <div className="price-filter-club">
          <p>1H DESDE</p>
          <div>
            <span>$1500</span>
            <p>ARS</p>
          </div>
        </div>
        <div className="name-filter-club">
          <div>
            <p>Winners Club</p>
            <img src="./svg/verified.svg" alt="verified-club" />
          </div>
          <div>
            <img src="./svg/message.svg" alt="message-club" />
            <img src="./svg/call.svg" alt="call-club" />
          </div>
        </div>
        <p>50km - CABA, Buenos Aires</p>
        <div>
          <img src="./svg/population.svg"></img>
          <img src="./svg/population.svg"></img>
          <img src="./svg/population.svg"></img>
          <img src="./svg/population.svg"></img>
          <img src="./svg/population.svg"></img>
        </div>
        <div className="times-filter-club">
          <p onClick={chooseTurn}>19:00</p>
          <p onClick={chooseTurn}>20:00</p>
          <p onClick={chooseTurn}>21:00</p>
        </div>
      </div>
    </>
  );
}
