import { ConnectionOptions } from "typeorm";

export default {
  type: "postgres",
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  migrations: [`${__dirname}/../database/migrations/*.ts`],
  entities: [`${__dirname}/../typeorm/entities/*.ts`],
  cli: {
    migrationsDir: `${__dirname}/../database/migrations`,
  },
  seeds: [`${__dirname}/../database/seeds/*.ts`],
} as ConnectionOptions;
