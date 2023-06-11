import { Router } from "express";
import {
  create,
  list,
  detail,
  update,
  borrar,
} from "../controllers/sale.controller.js";

const ventas = Router();

ventas.post("/ventas", create);
ventas.get("/ventas", list);
ventas.get("/ventas/:id", detail);
ventas.put("/ventas/:id", update);
ventas.delete("/ventas/:id", borrar);

export default ventas;