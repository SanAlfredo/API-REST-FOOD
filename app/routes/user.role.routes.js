import { Router } from "express";
import {
  create,
  list,
  detail,
  update,
  borrar,
} from "../controllers/user.role.controller.js";

const roles = Router();

roles.post("/userroles", create);
roles.get("/userroles", list);
roles.get("/userroles/:id", detail);
roles.put("/userroles/:id", update);
roles.delete("/userroles/:id", borrar);

export default roles;