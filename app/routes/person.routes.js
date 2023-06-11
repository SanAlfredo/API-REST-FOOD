import { Router } from "express";
import {
  create,
  list,
  detail,
  update,
  borrar,
} from "../controllers/person.controller.js";

const personas = Router();

personas.post("/personas", create);
personas.get("/personas", list);
personas.get("/personas/:id", detail);
personas.put("/personas/:id", update);
personas.delete("/personas/:id", borrar);

export default personas;
