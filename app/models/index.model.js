import Category from "./category.model.js";
import Product from "./product.model.js";
import Person from "./person.model.js";
import Role from "./role.model.js";
import User from "./user.model.js";
import UserRole from "./user.role.model.js";
import Sale from "./sale.model.js";
import Order from "./order.model.js";

//producto tiene llave foranea de categoria
Category.hasOne(Product, {
  onUpdate: "CASCADE",
});
Product.belongsTo(Category);
//usuario tiene llave foranea de persona
Person.hasOne(User, {
  onUpdate: "CASCADE",
});
User.belongsTo(Person);
//usuario tiene muchos roles a traves de la tabla user_role
User.belongsToMany(Role, {
  through: "user_role",
  foreignKey: {
    name: "user_id",
  },
});
Role.belongsToMany(User, {
  through: "user_role",
  foreignKey: {
    name: "role_id",
  },
});
//usuario tiene compras
User.hasOne(Sale, {
  onUpdate: "CASCADE",
});
Sale.belongsTo(User);
//las compras tienen pedidos
Sale.hasOne(Order, {
  onUpdate: "CASCADE",
});
Order.belongsTo(Sale);
Product.hasOne(Order, {
  onUpdate: "CASCADE",
});
Order.belongsTo(Product);

export { Product, Category, Person, User, Role, Sale, Order };
