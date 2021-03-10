import { Router } from "express";
import ProductsController from "@controllers/ProductController";

const routes = Router();

routes.get("/", (_, response) => response.json({ message: "Hello World" }));

routes.get("/products", ProductsController.index);

export default routes;
