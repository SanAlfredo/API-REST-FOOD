import { conn } from "./conexion.model.js";
import { DataTypes } from "sequelize";

const User = conn.define("users", {
  id: {
    type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
  },
  user: {
    type: DataTypes.STRING(50),
  },
  password: {
    type: DataTypes.STRING,
  },
  
});

export default User;