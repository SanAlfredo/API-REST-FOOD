import { Router } from "express";
import {
  create,
  list,
  detail,
  update,
  borrar,
} from "../controllers/category.controller.js";

const categorias = Router();

categorias.post("/categorias", create);
categorias.get("/categorias", list);
categorias.get("/categorias/:id", detail);
categorias.put("/categorias/:id", update);
categorias.delete("/categorias/:id", borrar);

export default categorias;