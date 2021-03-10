import { Connection, createConnection } from "typeorm";
import databaseConfig from "@config/database";

const initializedb = async (): Promise<Connection> =>
  createConnection(databaseConfig);

export default initializedb;
