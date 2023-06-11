import { Router } from "express";
import {
  create,
  list,
  detail,
  update,
  borrar,
} from "../controllers/order.controller.js";

const pedidos = Router();

pedidos.post("/pedidos", create);
pedidos.get("/pedidos", list);
pedidos.get("/pedidos/:id", detail);
pedidos.put("/pedidos/:id", update);
pedidos.delete("/pedidos/:id", borrar);

export default pedidos;