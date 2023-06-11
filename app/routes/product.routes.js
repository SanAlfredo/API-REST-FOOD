import { Router } from "express";
import {
  create,
  list,
  detail,
  update,
  borrar,
} from "../controllers/product.controller.js";

const productos = Router();

productos.post("/productos", create);
productos.get("/productos", list);
productos.get("/productos/:id", detail);
productos.put("/productos/:id", update);
productos.delete("/productos/:id", borrar);

export default productos;