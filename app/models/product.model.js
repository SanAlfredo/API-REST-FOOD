import { conn } from "./conexion.model.js";
import { DataTypes } from "sequelize";

const Product = conn.define("products", {
  id: {
    type: DataTypes.INTEGER,
    unsigned: true,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(50),
  },
  description: {
    type: DataTypes.TEXT,
  },
  price: {
    type: DataTypes.FLOAT,
  },
  
});

export default Product;
