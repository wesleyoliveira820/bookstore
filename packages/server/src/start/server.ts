import "reflect-metadata";
import "dotenv/config";
import express, { Express } from "express";
import cors from "cors";
import corsConfig from "@config/cors";
import jsonParserConfig from "@config/jsonParser";
import helmet from "helmet";
import createConnection from "@database/index";
import routes from "./routes";

createConnection();

class Server {
  public readonly http: Express;

  constructor() {
    this.http = express();
    this.initializeMiddlewares();
    this.initializeRoutes();
  }

  private initializeMiddlewares() {
    this.http.use(cors(corsConfig));
    this.http.use(express.json(jsonParserConfig));
    this.http.use(helmet());
  }

  private initializeRoutes() {
    this.http.use("/api", routes);
  }
}

export default Server;
