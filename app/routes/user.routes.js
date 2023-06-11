import { Router } from "express";
import {
  create,
  list,
  detail,
  update,
  borrar,
} from "../controllers/user.controller.js";

const usuarios = Router();

usuarios.post("/usuarios", create);
usuarios.get("/usuarios", list);
usuarios.get("/usuarios/:id", detail);
usuarios.put("/usuarios/:id", update);
usuarios.delete("/usuarios/:id", borrar);

export default usuarios;