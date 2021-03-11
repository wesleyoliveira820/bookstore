import { Router } from "express";
import ProductsController from "@controllers/ProductController";
import StockController from "@controllers/StockController";

const routes = Router();

routes.get("/", (_, response) => response.json({ message: "Hello World" }));

routes.get("/products", ProductsController.index);

routes.get("/stock/:id", StockController.show);

export default routes;
