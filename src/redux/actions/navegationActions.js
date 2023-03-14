import { createAction } from "@reduxjs/toolkit";

const filtrarEntrenadores = createAction("filtrarEntrenadores", () => {
  return {
    payload: "filtrar",
  };
});

const filtrarClubes = createAction("filtrarClubes", () => {
  return {
    payload: "filtrarClubes",
  };
});

const reservarHorario = createAction("reservarHorario", () => {
  return {
    payload: "reservarHorario",
  };
});

const activarFiltros = createAction("activarFiltros", () => {
  return {
    payload: "activarFiltros",
  };
});



const navegationActions = { filtrarEntrenadores, filtrarClubes, reservarHorario, activarFiltros };

export default navegationActions;
