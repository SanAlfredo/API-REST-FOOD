import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = (req, res) => {
  const { usuario, contrasenia } = req.body;
  if (!usuario)
    return res.status(400).send({
      mensage: "El campo usuario es obligatorio",
    });
  if (!contrasenia)
    return res.status(400).send({
      mensage: "El campo contrasenia es obligatorio",
    });

  User.findOne({
    where: {
      user: usuario,
    },
  })
    .then((data) => {
      if (!data) {
        //si no se encontro el usuario
        return res.status(404).send({
          mensage: "Usuario no encontrado",
        });
      }
      //si encontro el usuario
      const esContrasenaValida = bcryptjs.compareSync(
        contrasenia,
        data.password
      );

      if (!esContrasenaValida) {
        return res.status(401).send({
          mensaje: "Contrasena invalida!",
        });
      }

      //y si es valida vamos a crearel token jwt
      const token = jwt.sign({ id: data.id }, "mi-clave-secreta", {
        expiresIn: 86400, //24 horas de duracion
      });
      res.send({
        id: data.id,
        usuario: data.user,
        token,
      });
    })
    .catch((error) => res.status(500).send({ mensage: error.message }));
};
