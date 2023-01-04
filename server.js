import dotenv from 'dotenv';

import logger from './config/logger.js';
import app from './index.js';

dotenv.config();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  logger.info(`Server running on port ${port}`);
});
