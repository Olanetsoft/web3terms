import logger from '../config/logger.js';

const postAcknowledgementTweet = async (twitConfig, tweetId, screen_name) => {
  const data = {
    status: `@${screen_name} @${screen_name} thank you! I hope you find the response to be helpful. Please hit the follow button and let's connect!`,
    in_reply_to_status_id: tweetId,
  };

  try {
    await twitConfig.post('statuses/update', data);
    logger.info(`Acknowledgement Tweet Posted!`);
  } catch (error) {
    logger.error(error);
  }
};

export default postAcknowledgementTweet;
