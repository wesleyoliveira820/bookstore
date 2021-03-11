import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Product from "@typeorm/entities/Product";

class StockController {
  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const productRepository = getRepository(Product);

    const product_stock = await productRepository.findOne({
      where: { id },
      select: ["id", "title", "cover_url", "unit_price", "quantity_stock"],
    });

    if (!product_stock) {
      return response.status(404).json({ message: "Product not found." });
    }

    return response.json(product_stock);
  }
}

export default new StockController();
