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
            "https://livrariacultura.vteximg.com.br/arquivos/ids/23727919/2112276796.jpg?v=637506742460500000",
          quantity_stock: 2,
          unit_price: 54.9,
        },
        {
          id: uuidV4(),
          title: "1984",
          cover_url:
            "https://livrariacultura.vteximg.com.br/arquivos/ids/23802816/2112281208.jpg?v=637508470103630000",
          quantity_stock: 8,
          unit_price: 55.4,
        },
        {
          id: uuidV4(),
          title: "UMA TERRA PROMETIDA",
          cover_url:
            "https://livrariacultura.vteximg.com.br/arquivos/ids/23381313/2112274835.jpg?v=637503738329100000",
          quantity_stock: 3,
          unit_price: 64,
        },
        {
          id: uuidV4(),
          title: "HARRY POTTER E A CRIANÇA AMALDIÇOADA - PARTE UM E DOIS",
          cover_url:
            "https://livrariacultura.vteximg.com.br/arquivos/ids/23463916/46335636.jpg?v=637504002454670000",
          quantity_stock: 12,
          unit_price: 89.99,
        },
        {
          id: uuidV4(),
          title: "COMO AS DEMOCRACIAS MORREM",
          cover_url:
            "https://livrariacultura.vteximg.com.br/arquivos/ids/23543048/2000184194.jpg?v=637504635443200000",
          quantity_stock: 1,
          unit_price: 51.92,
        },
        {
          id: uuidV4(),
          title: "MULHERES QUE CORREM COM OS LOBOS",
          cover_url:
            "https://livrariacultura.vteximg.com.br/arquivos/ids/23463308/2000217064.jpg?v=637504001385230000",
          quantity_stock: 4,
          unit_price: 69.3,
        },
        {
          id: uuidV4(),
          title: "O DUQUE E EU (OS BRIDGERTONS – LIVRO 1)",
          cover_url:
            "https://livrariacultura.vteximg.com.br/arquivos/ids/23801115/42091362.jpg?v=637508468265000000",
          quantity_stock: 1,
          unit_price: 40,
        },
        {
          id: uuidV4(),
          title: "A REVOLUÇÃO DOS BICHOS - EDIÇÃO COM BRINDE (CADERNO)",
          cover_url:
            "https://livrariacultura.vteximg.com.br/arquivos/ids/23879131/2112281043.jpg?v=637509335628300000",
          quantity_stock: 4,
          unit_price: 19.95,
        },
      ])
      .execute();
  }
}

export default CreateProducts;
