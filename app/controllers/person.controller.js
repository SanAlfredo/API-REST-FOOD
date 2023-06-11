import Person from "../models/person.model.js";

//metodo para crear una persona
export const create = (req, res) => {
  console.log("create Person", req.body);
  const {
    body: { nombre, celular, direccion },
  } = req;
  if (!nombre) {
    res.status(400).send({
      message: "El campo nombre es obligatorio",
    });
    return;
  }
  if (!celular) {
    res.status(400).send({
      message: "El campo celular es obligatorio",
    });
    return;
  }
  const person = {
    name: nombre,
    cellphone: celular,
    address: direccion,
  };
  Person.create(person)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
    });
};
//devuelve la lista de personas
export const list = (req, res) => {
  console.log("list method called", req.body);
  Person.findAll()
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
//devuelve una sola persona
export const detail = (req, res) => {
  console.log("detalle de Persona ", req.params);
  Person.findByPk(req.params.id)
    .then((data) =>
      data ? res.send(data) : res.send({ message: "no hay datos" })
    )
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
    });
};
//actualizar datos persona
export const update = (req, res) => {
  console.log("actualizar persona ", req.params, req.body);
  const {
    body: { nombre, celular, direccion },
  } = req;
  if (!nombre) {
    res.status(400).send({
      message: "El campo nombre es obligatorio",
    });
    return;
  }
  if (!celular) {
    res.status(400).send({
      message: "El campo celular es obligatorio",
    });
    return;
  }
  const person = {
    name: nombre,
    cellphone: celular,
    address: direccion,
  };

  Person.findByPk(req.params.id)
    .then((data) =>
      data
        ? Person.update(person, { where: { id: req.params.id } })
            .then(res.send("actualizado con exito"))
            .catch((error) => {
              res.status(500).send({
                message: error.message,
              });
            })
        : res.send({ message: "no existe esa persona" })
    )
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
    });
};

//borrar una persona
export const borrar = (req, res) => {
  console.log("borrando persona", req.params);
  Person.findByPk(req.params.id)
    .then((data) =>
      data
        ? Person.destroy({ where: { id: req.params.id } })
            .then(res.send("eliminado con exito"))
            .catch((error) => {
              res.status(500).send({
                message: error.message,
              });
            })
        : res.send({ message: "no existe esa persona" })
    )
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
    });
};
