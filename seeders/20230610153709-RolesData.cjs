"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let date = new Date();
    let datos = ["admin", "gerente", "comun"];
    let data = [];
    datos.forEach(function (elemento, indice, array) {
      data.push({
        role: elemento,
        createdAt: date,
        updatedAt: date,
      });
    });
    await queryInterface.bulkInsert("roles", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("roles", null, {});
  },
};
