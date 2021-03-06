import { transports, format } from "winston";

const { printf, combine, colorize, timestamp: datetime } = format;

const customFormat = printf(
  ({ level, message, timestamp }) => `${timestamp} - ${level}: ${message}`
);

export default {
  console: {
    transports: new transports.Console({
      level: "debug",
      format: combine(colorize(), datetime(), customFormat),
      handleExceptions: true,
    }),
  },
  file: {
    transports: [
      new transports.File({
        level: "info",
        format: combine(format.timestamp(), format.json()),
        handleExceptions: true,
        filename: "logs/app.log",
      }),
      new transports.File({
        level: "error",
        format: combine(format.timestamp(), format.json()),
        handleExceptions: true,
        filename: "logs/error.log",
      }),
    ],
  },
};
