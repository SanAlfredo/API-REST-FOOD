import Order from "../models/order.model.js";
import Product from "../models/product.model.js";
import Sale from "../models/sale.model.js";

//metodo para crear un pedido
export const create = (req, res) => {
  console.log("create a Order", req.body);
  const {
    body: { cantidad, precio, venta, producto },
  } = req;
  if (!cantidad) {
    res.status(400).send({
      message: "El campo cantidad es obligatorio",
    });
    return;
  }
  if (!precio) {
    res.status(400).send({
      message: "El campo precio es obligatorio",
    });
    return;
  }
  if (!venta) {
    res.status(400).send({
      message: "El campo venta es obligatorio",
    });
    return;
  }
  if (!producto) {
    res.status(400).send({
      message: "El campo producto es obligatorio",
    });
    return;
  }
  const pedidos = {
    amount: cantidad,
    total_price: precio,
    saleId: venta,
    productId: producto,
  };
  Product.findByPk(producto)
    .then((data) =>
      data
        ? Sale.findByPk(venta).then((data) =>
            data
              ? Order.create(pedidos)
                  .then((data) => {
                    res.send(data);
                  })
                  .catch((error) => {
                    res.status(500).send({
                      message: error.message,
                    });
                  })
              : res.send({ message: "no existe ese codigo de venta" })
          )
        : res.send({ message: "no existe ese codigo de producto" })
    )
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
    });
};
//devuelve la lista de pedidos
export const list = (req, res) => {
  console.log("list method called", req.body);
  Order.findAll()
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
//devuelve un solo pedido
export const detail = (req, res) => {
  console.log("detalle de Pedidos", req.params);
  Order.findByPk(req.params.id)
    .then((data) =>
      data ? res.send(data) : res.send({ message: "no hay datos" })
    )
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
    });
};
//actualizar datos pedidos
export const update = (req, res) => {
  console.log("actualizar Pedido", req.params, req.body);
  const {
    body: { cantidad, precio, venta, producto },
  } = req;
  if (!cantidad) {
    res.status(400).send({
      message: "El campo cantidad es obligatorio",
    });
    return;
  }
  if (!precio) {
    res.status(400).send({
      message: "El campo precio es obligatorio",
    });
    return;
  }
  if (!venta) {
    res.status(400).send({
      message: "El campo venta es obligatorio",
    });
    return;
  }
  if (!producto) {
    res.status(400).send({
      message: "El campo producto es obligatorio",
    });
    return;
  }
  const pedidos = {
    amount: cantidad,
    total_price: precio,
    saleId: venta,
    productId: producto,
  };
  Order.findByPk(req.params.id)
    .then((data) =>
      data
        ? Sale.findByPk(venta).then((data) =>
            data
              ? Product.findByPk(producto)
                  .then((data) =>
                    data
                      ? Order.update(pedidos, { where: { id: req.params.id } })
                          .then(res.send("actualizado con exito"))
                          .catch((error) => {
                            res.status(500).send({
                              message: error.message,
                            });
                          })
                      : res.send({ message: "no existe ese codigo de producto" })
                  )
                  .catch((error) => {
                    res.status(500).send({
                      message: error.message,
                    });
                  })
              : res.send({ message: "no existe ese codigo de venta" })
          )
        : res.send({ message: "no existe ese codigo de pedido" })
    )
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
    });
};

//borrar un pedido
export const borrar = (req, res) => {
  console.log("borrando User con rol", req.params);
  Order.findByPk(req.params.id)
    .then((data) =>
      data
        ? Order.destroy({ where: { id: req.params.id } })
            .then(res.send("eliminado con exito"))
            .catch((error) => {
              res.status(500).send({
                message: error.message,
              });
            })
        : res.send({ message: "no existe ese codigo de pedido" })
    )
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
    });
};
