import logger from '../config/logger.js';

const validateTweet = (user, text, retweet_status) => {
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
