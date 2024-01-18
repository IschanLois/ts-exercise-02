import { Readable, pipeline } from 'node:stream'

import winston from 'winston'

import characterGenerator from './characterGenerator.js'
import characterFilter from './characterFilter.js'
import logFormatter from './logFormatter.js'

const logger: winston.Logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
})


pipeline(
  Readable.from(characterGenerator()),
  characterFilter,
  logFormatter,
  logger,
  (error: Error | null):void => {
    if (error) {
      logger.error(error)
    }
  },
)
