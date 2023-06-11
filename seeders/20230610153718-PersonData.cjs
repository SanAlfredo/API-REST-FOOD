"use strict";

const faker = require("faker");
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    let date = new Date();
    let datos = [
      "Administrador o gerente",
      "Alisson Bellot Cuba",
      "Mariela Poma Andia",
      "Jimmy Vladimir Mendez Condori",
    ];
    let data = [];
    datos.forEach(function (elemento, indice, array) {
      data.push({
        name: elemento,
        cellphone: faker.phone.phoneNumber(),
        address: faker.address.streetAddress(),
        createdAt: date,
        updatedAt: date,
      });
    });
    await queryInterface.bulkInsert("people", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("people", null, {});
  },
};
