import { createLogger, LoggerOptions } from "winston";
import loggerConfig from "@config/logger";

let driverLogger: LoggerOptions;

if (process.env.NODE_ENV !== "development") {
  driverLogger = loggerConfig.file;
} else {
  driverLogger = loggerConfig.console;
}

const logger = createLogger(driverLogger);

export default logger;
