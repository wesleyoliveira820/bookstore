import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Product from "@typeorm/entities/Product";
import logger from "@utils/logger";

class ProductController {
  async index(request: Request, response: Response): Promise<Response> {
    const productRepository = getRepository(Product);

    const products = await productRepository.find({
      select: ["id", "title", "cover_url", "unit_price"],
    });

    logger.debug("controllers.products.index: products successfully listed");

    return response.json(products);
  }
}

export default new ProductController();
