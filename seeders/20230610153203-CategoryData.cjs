"use strict";

/** @type {import('sequelize-cli').Migration} */
//const faker = require("faker");
module.exports = {
  async up(queryInterface, Sequelize) {
    //let amount = 50;
    let date = new Date();
    const datos = [
      "complementos",
      "gaseosas",
      "pollos",
      "sandwiches",
      "postres",
    ];
    let data = [];
    // let data = [
    //   {
    //     category: "complementos",
    //     createdAt: date,
    //     updatedAt: date,
    //   },
    //   {
    //     category: "gaseosas",
    //     createdAt: date,
    //     updatedAt: date,
    //   },
    //   {
    //     category: "pollos",
    //     createdAt: date,
    //     updatedAt: date,
    //   },
    //   {
    //     category: "sandwiches",
    //     createdAt: date,
    //     updatedAt: date,
    //   },
    //   {
    //     category: "postres",
    //     createdAt: date,
    //     updatedAt: date,
    //   },
    // ];
    //ejemplo usando faker
    // while (amount--) {
    //   data.push({
    //     email: faker.internet.email(),
    //     password: faker.internet.password(),
    //     createdAt: date,
    //     updatedAt: date,
    //   });
    // }

    datos.forEach(function (elemento, indice, array) {
      data.push({
        category: elemento,
        createdAt: date,
        updatedAt: date,
      });
    });

    await queryInterface.bulkInsert("categories", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
