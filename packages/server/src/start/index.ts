import "dotenv/config";
import logger from "@utils/logger";
import Server from "./server";

const server = new Server();

const port = process.env.PORT;

server.http.listen(port || 3333, () =>
  logger.info(`[server]:running on port ${port}`)
);
