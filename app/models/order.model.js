import { conn } from "./conexion.model.js";
import { DataTypes } from "sequelize";

const Order = conn.define("orders", {
  id: {
    type: DataTypes.INTEGER,
    unsigned: true,
    primaryKey: true,
    autoIncrement: true,
  },
  amount: {
    type: DataTypes.INTEGER,
  },
  total_price: {
    type: DataTypes.FLOAT,
  },
  
});

export default Order;