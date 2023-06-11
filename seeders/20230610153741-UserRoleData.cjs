"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let date = new Date();
    let data = [];
    data.push({
      createdAt: date,
      updatedAt: date,
      user_id: 1,
      role_id: 1,
    });
    data.push({
      createdAt: date,
      updatedAt: date,
      user_id: 2,
      role_id: 2,
    });
    data.push({
      createdAt: date,
      updatedAt: date,
      user_id: 3,
      role_id: 2,
    });
    data.push({
      createdAt: date,
      updatedAt: date,
      user_id: 4,
      role_id: 2,
    });

    await queryInterface.bulkInsert("user_roles", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("user_roles", null, {});
  },
};
