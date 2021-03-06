import Server from "./server";

const server = new Server();

const port = process.env.PORT;

server.http.listen(port || 3333);
