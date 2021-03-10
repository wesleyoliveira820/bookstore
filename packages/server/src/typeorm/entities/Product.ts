import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("products")
class Product {
  @PrimaryColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  cover_url: string;

  @Column("int")
  quantity_stock: number;

  @Column("decimal", { precision: 10, scale: 2 })
  unit_price: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Product;
