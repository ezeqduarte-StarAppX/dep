import { createAction } from "@reduxjs/toolkit";

const filtrarEntrenadores = createAction("filtrarEntrenadores", (aprove) => {
  return {
    payload: aprove,
  };
});

const navegationActions = { filtrarEntrenadores };

export default navegationActions;
