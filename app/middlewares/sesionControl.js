import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import Role from "../models/role.model.js";

export const verificarToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({
      mensaje: "Token Obligatorio!",
    });
  }

  jwt.verify(token, "mi-clave-secreta", (error, decoded) => {
    if (error) {
      return res.status(401).send({
        mensaje: "No esta autorizado!",
      });
    }
    req.userIdDecoded = decoded.id;
    next();
  });
};

export const esAdmin = (req, res, next) => {
  User.findByPk(req.userIdDecoded, {
    include: [
      {
        model: Role,
        as: "roles",
        attributes: ["id", "role"],
      },
    ],
  }).then((user) => {
    const { roles } = user;
    for (let i = 0; i < roles.length; i++) {
      if (roles[i].role == "admin") {
        next();
        return;
      }
    }
    res.status(403).send({
      mensaje: "Usted no tiene el rol necesario!",
    });
  });
};
export const esGerente = (req, res, next) => {
    User.findByPk(req.userIdDecoded, {
      include: [
        {
          model: Role,
          as: "roles",
          attributes: ["id", "role"],
        },
      ],
    }).then((user) => {
      const { roles } = user;
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].role == "gerente") {
          next();
          return;
        }
      }
      res.status(403).send({
        mensaje: "Usted no tiene el rol necesario!",
      });
    });
  };