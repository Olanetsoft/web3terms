import logger from '../config/logger.js';

const postTweet = async (twitConfig, tweetText, tweetId, screen_name) => {
  const data = {
    status: `@${screen_name} ${tweetText}`,
    in_reply_to_status_id: tweetId,
  };

  try {
    const response = await twitConfig.post('statuses/update', data);
    logger.info(`Tweet: ${response.data.text}`);
    logger.info(`Tweet Posted!`);
  } catch (error) {
    logger.error(error);
  }
};

export default postTweet;
