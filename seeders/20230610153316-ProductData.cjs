"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let date = new Date();
    let datos = [
      ["porcion de papas", "porcion de papas fritas tamaño mediano", 1, 5.0],
      ["porcion de postre", "porcion de platano frito tamaño mediano", 1, 3.0],
      [
        "porcion de arroz",
        "porcion de arroz graneado para una persona",
        1,
        5.0,
      ],
      ["coca cola vaso pequeño", "gaseosa coca cola en vaso de 250 ml", 2, 5.0],
      ["coca cola vaso mediano", "gaseosa coca cola en vaso de 500 ml", 2, 7.0],
      ["coca cola vaso grande", "gaseosa coca cola en vaso de 750 ml", 2, 10.0],
      [
        "coca cola botella",
        "gaseosa coca cola en botella descartable de 2 Lts",
        2,
        14.0,
      ],
      ["fanta vaso pequeño", "gaseosa fanta en vaso de 250 ml", 2, 5.0],
      ["fanta vaso mediano", "gaseosa fanta en vaso de 500 ml", 2, 7.0],
      ["fanta vaso grande", "gaseosa fanta en vaso de 750 ml", 2, 10.0],
      [
        "fanta botella",
        "gaseosa fanta en botella descartable de 2 Lts",
        2,
        14.0,
      ],
      [
        "porcion pollo a la broaster",
        "1/4 pollo preparado con la reseta especial Don Pepe y cocido a la broaster",
        3,
        12.0,
      ],
      [
        "balde de 4",
        "balde de 4 porciones de 1/4 de pollo preparado con la reseta especial Don Pepe y cocido a la broaster acompañado de papas fritas",
        3,
        56.0,
      ],
      [
        "balde de 8",
        "balde de 8 porciones de 1/4 de pollo preparado con la reseta especial Don Pepe y cocido a la broaster acompañado de papas fritas",
        3,
        110.0,
      ],
      [
        "pollo a la broaster con papas",
        "1/4 pollo preparado con la reseta especial Don Pepe y cocido a la broaster acompañado de papas fritas",
        3,
        15.0,
      ],
      [
        "pollo a la broaster con arroz",
        "1/4 pollo preparado con la reseta especial Don Pepe y cocido a la broaster acompañado de arroz graneado",
        3,
        15.0,
      ],
      [
        "combo pollo 1",
        "1/4 pollo broaster con papas fritas y coca cola vaso pequeña",
        3,
        19.0,
      ],
      [
        "combo pollo 2",
        "1/4 pollo broaster con papas fritas y coca cola vaso mediana",
        3,
        21.0,
      ],
      [
        "combo pollo 3",
        "1/4 pollo broaster con papas fritas y coca cola vaso grande",
        3,
        23.0,
      ],
      [
        "lomito",
        "sandwich de carne de res con jamon, queso, tomate, lechuga y aderesos acompañado de papa frita",
        4,
        18.0,
      ],
      [
        "lomito con huevo",
        "sandwich de carne de res con huevo, jamon, queso, tomate, lechuga y aderesos acompañado de papa frita",
        4,
        20.0,
      ],
      [
        "hamburguesa",
        "sandwich de carne de res molida con jamon, queso, tomate, lechuga y aderesos acompañado de papa frita",
        4,
        18.0,
      ],
      [
        "combo lomito 1",
        "sandwich de carne de res con jamon, queso, tomate, lechuga y aderesos acompañado de papa frita y coca cola vaso pequeña",
        4,
        21.0,
      ],
      [
        "combo lomito 2",
        "sandwich de carne de res con jamon, queso, tomate, lechuga y aderesos acompañado de papa frita y coca cola vaso mediana",
        4,
        23.0,
      ],
      [
        "combo lomito 3",
        "sandwich de carne de res con jamon, queso, tomate, lechuga y aderesos acompañado de papa frita y coca cola vaso grande",
        4,
        25.0,
      ],
      [
        "combo lomito 4",
        "sandwich de carne de res con huevo, jamon, queso, tomate, lechuga y aderesos acompañado de papa frita y coca cola vaso pequeña",
        4,
        23.0,
      ],
    ];
    let data = [];
    datos.forEach(function (elemento, indice, array) {
      data.push({
        name: elemento[0],
        description: elemento[1],
        price: elemento[3],
        createdAt: date,
        updatedAt: date,
        categoryId: elemento[2],
      });
    });

    await queryInterface.bulkInsert("products", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
  },
};
