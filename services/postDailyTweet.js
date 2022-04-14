import logger from '../config/logger.js';

const postDailyTweet = async (twitConfig, tweetText) => {
  // Post daily tweet
  const data = {
    status: tweetText,
  };

  try {
    const response = await twitConfig.post('statuses/update', data);
    logger.info(`Tweet: ${response.data.text}`);
    logger.info(`Daily Tweet Posted!`);
  } catch (error) {
    logger.error(error);
  }
};

export default postDailyTweet;
