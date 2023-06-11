import express from "express";
import indexRoutes from "./routes/index.routes.js";
import personRoutes from "./routes/person.routes.js";
import usuarioRoutes from "./routes/user.routes.js";
// import cursoRoutes from "./routes/curso.routes.js";

// import sesionRoutes from "./routes/sesion.routes.js";

const app = express();
app.use(express.json());
//app.use(express.urlencoded({}));

//rutas
app.use(indexRoutes);
app.use(personRoutes);
app.use(usuarioRoutes);
// app.use(sesionRoutes);

export default app;
