import Category from "../models/category.model.js";
import Product from "../models/product.model.js";

//metodo para crear un producto
export const create = (req, res) => {
  console.log("create Product", req.body);
  const {
    body: { nombre, descripcion, precio, categoria },
  } = req;
  if (!nombre) {
    res.status(400).send({
      message: "El campo nombre es obligatorio",
    });
    return;
  }
  if (!descripcion) {
    res.status(400).send({
      message: "El campo descripcion es obligatorio",
    });
    return;
  }
  if (!precio) {
    res.status(400).send({
      message: "El campo precio es obligatorio",
    });
    return;
  }
  if (!categoria) {
    res.status(400).send({
      message: "El campo categoria es obligatorio",
    });
    return;
  }
  const producto = {
    name: nombre,
    description: descripcion,
    price: precio,
    categoryId: categoria,
  };

  Category.findByPk(categoria)
    .then((data) =>
      data
        ? Product.create(producto)
            .then((data) => {
              res.send(data);
            })
            .catch((error) => {
              res.status(500).send({
                message: error.message,
              });
            })
        : res.send({ message: "no existe esa categoria" })
    )
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
    });
};
//devuelve la lista de productos
export const list = (req, res) => {
  console.log("list method called", req.body);
  Product.findAll()
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
//devuelve un solo producto
export const detail = (req, res) => {
  console.log("detalle de Producto ", req.params);
  Product.findByPk(req.params.id)
    .then((data) =>
      data ? res.send(data) : res.send({ message: "no hay datos" })
    )
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
    });
};
//actualizar datos producto
export const update = (req, res) => {
  console.log("actualizar producto ", req.params, req.body);
  const {
    body: { nombre, descripcion, precio, categoria },
  } = req;
  if (!nombre) {
    res.status(400).send({
      message: "El campo nombre es obligatorio",
    });
    return;
  }
  if (!descripcion) {
    res.status(400).send({
      message: "El campo descripcion es obligatorio",
    });
    return;
  }
  if (!precio) {
    res.status(400).send({
      message: "El campo precio es obligatorio",
    });
    return;
  }
  if (!categoria) {
    res.status(400).send({
      message: "El campo categoria es obligatorio",
    });
    return;
  }
  const producto = {
    name: nombre,
    description: descripcion,
    price: precio,
    categoryId: categoria,
  };

  Category.findByPk(categoria)
    .then((data) =>
      data
        ? Product.findByPk(req.params.id)
            .then((data) =>
              data
                ? Product.update(producto, { where: { id: req.params.id } })
                    .then(res.send("actualizado con exito"))
                    .catch((error) => {
                      res.status(500).send({
                        message: error.message,
                      });
                    })
                : res.send({ message: "no existe ese producto" })
            )
            .catch((error) => {
              res.status(500).send({
                message: error.message,
              });
            })
        : res.send({ message: "no existe esa categoria" })
    )
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
    });
};

//borrar un producto
export const borrar = (req, res) => {
  console.log("borrando producto", req.params);
  Product.findByPk(req.params.id)
    .then((data) =>
      data
        ? Product.destroy({ where: { id: req.params.id } })
            .then(res.send("eliminado con exito"))
            .catch((error) => {
              res.status(500).send({
                message: error.message,
              });
            })
        : res.send({ message: "no existe ese producto" })
    )
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
    });
};
