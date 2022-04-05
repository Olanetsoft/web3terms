import logger from '../config/logger.js';

const restartStream = stream => {
  logger.info('Restarting stream...');
  stream.stop();

  //Set a 5 minute delay before restarting the stream
  const delay = setInterval(() => logger.info('delaying...'), 1000 * 60 * 5);

  //Restart the stream after 5 minutes
  setTimeout(() => {
    logger.info('Restarting stream...');
    stream.start();
    clearInterval(delay);
  }, 1000 * 60 * 5);
};

export default restartStream;
