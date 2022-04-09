import logger from '../config/logger.js';

const validateTweet = (user, text, retweet_status) => {
  logger.info(`User: ${user.screen_name}`);
  logger.info(`Text: ${text}`);
  logger.info(`Retweet Status: ${retweet_status}`);
  if (
    user?.screen_name !== 'web3terms' &&
    text.toLowerCase().includes('explain') &&
    retweet_status === undefined
  ) {
    logger.info('Tweet Valid!');

    return true;
  }
  return false;
};

export default validateTweet;
