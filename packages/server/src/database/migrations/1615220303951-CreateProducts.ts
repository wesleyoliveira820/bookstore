import { MigrationInterface, QueryRunner, Table } from "typeorm";

class CreateProducts1615220303951 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "products",
        columns: [
          {
            name: "id",
            type: "uuid",
            generationStrategy: "uuid",
            isPrimary: true,
            isUnique: true,
            isNullable: false,
          },
          {
            name: "title",
            type: "varchar",
            isUnique: true,
            isNullable: false,
          },
          {
            name: "cover_url",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "quantity_stock",
            type: "int",
            unsigned: true,
            default: 0,
            isNullable: false,
          },
          {
            name: "unit_price",
            type: "decimal",
            precision: 10,
            scale: 2,
            isNullable: false,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("products");
  }
}

export default CreateProducts1615220303951;
