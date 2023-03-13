import { createAction } from "@reduxjs/toolkit";

const filtrarEntrenadores = createAction("filtrarEntrenadores", () => {
  return {
    payload: "filtrar",
  };
});

const filtrarClubes = createAction("filtrarClubes", () => {
  return {
    payload: "filtrar",
  };
});

const reservarHorario = createAction("reservarHorario", () => {
  return {
    payload: "reservar",
  };
});

const navegationActions = { filtrarEntrenadores, filtrarClubes, reservarHorario };

export default navegationActions;
