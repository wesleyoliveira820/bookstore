import Server from "./server";
import logger from "../utils/logger";

const server = new Server();

const port = process.env.PORT;

server.http.listen(port || 3333, () =>
  logger.info(`[server]:running on port ${port}`)
);
