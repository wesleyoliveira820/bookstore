import { ConnectionOptions } from "typeorm";

const environment = process.env.NODE_ENV;
const databaseTest = "bookstore_test";

export default {
  type: "postgres",
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: environment === "test" ? databaseTest : process.env.DATABASE_NAME,
  migrations: [`${__dirname}/../database/migrations/*.ts`],
  entities: [`${__dirname}/../typeorm/entities/*.ts`],
  cli: {
    migrationsDir: `${__dirname}/../database/migrations`,
  },
} as ConnectionOptions;
