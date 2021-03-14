import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { v4 as uuidV4 } from "uuid";
import Product from "../../typeorm/entities/Product";

class CreateProducts implements Seeder {
  async run(factory: Factory, connection: Connection): Promise<void> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Product)
      .values([
        {
          id: uuidV4(),
          title:
            "GUIA PRÁTICO ME POUPE! – 33 DIAS PARA MUDAR SUA VIDA FINANCEIRA",
          cover_url:
            "https://images-na.ssl-images-amazon.com/images/I/411PGBL0r+L._SY344_BO1,204,203,200_.jpg",
          quantity_stock: 2,
          unit_price: 54.9,
        },
        {
          id: uuidV4(),
          title: "1984",
          cover_url:
            "https://images-na.ssl-images-amazon.com/images/I/51feD87yuEL._SX321_BO1,204,203,200_.jpg",
          quantity_stock: 8,
          unit_price: 55.4,
        },
        {
          id: uuidV4(),
          title: "UMA TERRA PROMETIDA",
          cover_url:
            "https://images-na.ssl-images-amazon.com/images/I/41WmyR2juoL._SX339_BO1,204,203,200_.jpg",
          quantity_stock: 3,
          unit_price: 64,
        },
        {
          id: uuidV4(),
          title: "HARRY POTTER E A CRIANÇA AMALDIÇOADA - PARTE UM E DOIS",
          cover_url:
            "https://images-na.ssl-images-amazon.com/images/I/51nDIuUny1L._SX346_BO1,204,203,200_.jpg",
          quantity_stock: 12,
          unit_price: 89.99,
        },
        {
          id: uuidV4(),
          title: "COMO AS DEMOCRACIAS MORREM",
          cover_url:
            "https://images-na.ssl-images-amazon.com/images/I/51n7RP2XbtL._SX346_BO1,204,203,200_.jpg",
          quantity_stock: 1,
          unit_price: 51.92,
        },
        {
          id: uuidV4(),
          title: "MULHERES QUE CORREM COM OS LOBOS",
          cover_url:
            "https://images-na.ssl-images-amazon.com/images/I/41ogXvQ5WYL._SX341_BO1,204,203,200_.jpg",
          quantity_stock: 4,
          unit_price: 69.3,
        },
        {
          id: uuidV4(),
          title: "O DUQUE E EU (OS BRIDGERTONS – LIVRO 1)",
          cover_url:
            "https://images-na.ssl-images-amazon.com/images/I/51ASlhVRLRL._SX345_BO1,204,203,200_.jpg",
          quantity_stock: 1,
          unit_price: 40,
        },
        {
          id: uuidV4(),
          title: "A REVOLUÇÃO DOS BICHOS - EDIÇÃO COM BRINDE (CADERNO)",
          cover_url:
            "https://images-na.ssl-images-amazon.com/images/I/51Gq77j0oyL._SX330_BO1,204,203,200_.jpg",
          quantity_stock: 4,
          unit_price: 19.95,
        },
      ])
      .execute();
  }
}

export default CreateProducts;
