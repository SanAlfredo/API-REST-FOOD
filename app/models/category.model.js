import { conn } from "./conexion.model.js";
import { DataTypes } from "sequelize";


const Category = conn.define("categories", {
  id: {
    type: DataTypes.INTEGER,
    unsigned: true,
    primaryKey: true,
    autoIncrement: true,
  },
  category: {
    type: DataTypes.STRING(30),
  },
});

export default Category;
