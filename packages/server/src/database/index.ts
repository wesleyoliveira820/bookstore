import { createConnection } from "typeorm";
import databaseConfig from "@config/database";

const connection = createConnection(databaseConfig);

export default connection;
