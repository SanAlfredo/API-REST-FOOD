"use strict";

/** @type {import('sequelize-cli').Migration} */

const bcryptjs = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    let date = new Date();
    let datos = ["admin", "alisson", "mariela", "jimmy"];
    let contra = "1234";
    let data = [];
    datos.forEach(function (elemento, indice, array) {
      var i = indice + 1;
      data.push({
        user: elemento,
        password: bcryptjs.hashSync(contra, 8),
        createdAt: date,
        updatedAt: date,
        personId: i,
      });
    });

    await queryInterface.bulkInsert("users", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
