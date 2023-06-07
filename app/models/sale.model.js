import { conn } from "./conexion.model.js";
import { DataTypes } from "sequelize";

const Sale = conn.define("sales", {
  id: {
    type: DataTypes.INTEGER,
    unsigned: true,
    primaryKey: true,
    autoIncrement: true,
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  paid: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

export default Sale;
