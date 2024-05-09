import winston, { format, transport, transports } from "winston";

const logger = winston.createLogger({
  transports: [
    new transports.Console()
  ],
  format: format.json()
})


export default logger