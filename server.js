import dotenv from 'dotenv'

import logger from './config/logger.js'
import app from './index.js'

dotenv.config()

app.listen(process.env.PORT, () => {
  logger.info(`Server running on port ${process.env.PORT}`)
})
