import { conn } from "../models/index.model.js";

export const ping = (req, res) => {
  if (conn) {
    res.json("Conectado con exito");
  } else {
    res.json("Ha ocurrido algun problema");
  }
};
export const index = (req, res) => {
  res.json("Bienvenido API REST aplicacion de restaurante");
};
