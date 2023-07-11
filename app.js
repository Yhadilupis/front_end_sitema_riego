import { api } from "./config/config.js";
import swaggerDocs from "./config/swagger.config.js";
import middleware from "./middlewares/token.middleware.js";
import produc from "./routes/product.routes.js";
import express from "express";

import user from "./routes/user.routes.js";

const app = express();

app.use(express.json());
// ROUTERS
app.use("/api/user", user);
app.use("/api/data", produc);

// app.use('/api/profile', middleware, profile);

// SERVIDOR ACTIVO
app.listen(api.port, () => {
  console.log(`Servidor corriento en el puerto => ${api.port}`);
  swaggerDocs(app, api.port);
});
