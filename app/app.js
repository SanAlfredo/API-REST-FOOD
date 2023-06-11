import express from "express";
import indexRoutes from "./routes/index.routes.js";
import personRoutes from "./routes/person.routes.js";
import usuarioRoutes from "./routes/user.routes.js";
import rolRoutes from "./routes/role.routes.js";
import userRoleRoutes from "./routes/user.role.routes.js";
import categoryRoutes from "./routes/category.routes.js";
import productRoutes from "./routes/product.routes.js";
import saleRoutes from "./routes/sale.routes.js";
import orderRoutes from "./routes/order.routes.js";
// import cursoRoutes from "./routes/curso.routes.js";

// import sesionRoutes from "./routes/sesion.routes.js";

const app = express();
app.use(express.json());
//app.use(express.urlencoded({}));

//rutas
app.use(indexRoutes);
app.use(personRoutes);
app.use(usuarioRoutes);
app.use(rolRoutes);
app.use(userRoleRoutes);
app.use(categoryRoutes);
app.use(productRoutes);
app.use(saleRoutes);
app.use(orderRoutes);
// app.use(sesionRoutes);

export default app;
