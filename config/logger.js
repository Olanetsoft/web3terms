import { createLogger, format, transports } from 'winston'

const { combine, timestamp, errors, simple, splat, printf } = format

const logger = createLogger({
  format: combine(
    errors({ stack: true }),
    splat(),
    timestamp(),
    simple(),
    printf(
      info =>
        `${info.timestamp} [LOGGING] ${info.level}: ${JSON.stringify(
          info.message
        )}`
    )
  ),
  transports: [new transports.Console()],
})

export default logger
