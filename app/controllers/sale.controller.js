import Sale from "../models/sale.model.js";
import User from "../models/user.model.js";

//metodo para crear una venta
export const create = (req, res) => {
  console.log("create a Sale", req.body);
  const {
    body: { fecha, pagado, usuario },
  } = req;
  if (!fecha) {
    res.status(400).send({
      message: "El campo fecha es obligatorio",
    });
    return;
  }
  if (!pagado) {
    res.status(400).send({
      message: "El campo pagado es obligatorio",
    });
    return;
  }
  if (!usuario) {
    res.status(400).send({
      message: "El campo usuario es obligatorio",
    });
    return;
  }
  const venta = {
    date: fecha,
    paid: pagado,
    userId: usuario,
  };

  User.findByPk(usuario)
    .then((data) =>
      data
        ? Sale.create(venta)
            .then((data) => {
              res.send(data);
            })
            .catch((error) => {
              res.status(500).send({
                message: error.message,
              });
            })
        : res.send({ message: "no existe ese usuario" })
    )
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
    });
};
//devuelve la lista de ventas
export const list = (req, res) => {
  console.log("list method called", req.body);
  Sale.findAll()
    .then((data) =>
      data
        ? res.send(data)
        : res.send({
            message: "no hay datos",
          })
    )
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
    });
};
//devuelve una sola venta
export const detail = (req, res) => {
  console.log("detalle de Venta", req.params);
  Sale.findByPk(req.params.id)
    .then((data) =>
      data ? res.send(data) : res.send({ message: "no hay datos" })
    )
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
    });
};
//actualizar datos venta
export const update = (req, res) => {
  console.log("actualizar venta", req.params, req.body);
  const {
    body: { fecha, pagado, usuario },
  } = req;
  if (!fecha) {
    res.status(400).send({
      message: "El campo fecha es obligatorio",
    });
    return;
  }
  if (!pagado) {
    res.status(400).send({
      message: "El campo pagado es obligatorio",
    });
    return;
  }
  if (!usuario) {
    res.status(400).send({
      message: "El campo usuario es obligatorio",
    });
    return;
  }
  const venta = {
    date: fecha,
    paid: pagado,
    userId: usuario,
  };

  User.findByPk(usuario)
    .then((data) =>
      data
        ? Sale.findByPk(req.params.id)
            .then((data) =>
              data
                ? Sale.update(venta, { where: { id: req.params.id } })
                    .then(res.send("actualizado con exito"))
                    .catch((error) => {
                      res.status(500).send({
                        message: error.message,
                      });
                    })
                : res.send({ message: "no existe esa venta" })
            )
            .catch((error) => {
              res.status(500).send({
                message: error.message,
              });
            })
        : res.send({ message: "no existe ese usuario" })
    )
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
    });
};

//borrar una venta
export const borrar = (req, res) => {
  console.log("borrando venta", req.params);
  Sale.findByPk(req.params.id)
    .then((data) =>
      data
        ? Sale.destroy({ where: { id: req.params.id } })
            .then(res.send("eliminado con exito"))
            .catch((error) => {
              res.status(500).send({
                message: error.message,
              });
            })
        : res.send({ message: "no existe esa venta" })
    )
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
    });
};