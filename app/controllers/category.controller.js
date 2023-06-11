import Category from "../models/category.model.js";

//metodo para crear una categoria
export const create = (req, res) => {
  console.log("create Category", req.body);
  const {
    body: { categoria },
  } = req;
  if (!categoria) {
    res.status(400).send({
      message: "El campo categoria es obligatorio",
    });
    return;
  }
  const categorias = {
    category: categoria,
  };
  Category.create(categorias)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
    });
};
//devuelve la lista de categorias
export const list = (req, res) => {
  console.log("list method called", req.body);
  Category.findAll()
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
//devuelve una sola categoria
export const detail = (req, res) => {
  console.log("detalle de Category ", req.params);
  Category.findByPk(req.params.id)
    .then((data) =>
      data ? res.send(data) : res.send({ message: "no hay datos" })
    )
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
    });
};
//actualizar datos categoria
export const update = (req, res) => {
  console.log("actualizar Categoria ", req.params, req.body);
  const {
    body: { categoria },
  } = req;
  if (!categoria) {
    res.status(400).send({
      message: "El campo categoria es obligatorio",
    });
    return;
  }
  const categorias = {
    category: categoria,
  };

  Category.findByPk(req.params.id)
    .then((data) =>
      data
        ? Category.update(categorias, { where: { id: req.params.id } })
            .then(res.send("actualizado con exito"))
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

//borrar una categoria
export const borrar = (req, res) => {
  console.log("borrando role", req.params);
  Category.findByPk(req.params.id)
    .then((data) =>
      data
        ? Category.destroy({ where: { id: req.params.id } })
            .then(res.send("eliminado con exito"))
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
