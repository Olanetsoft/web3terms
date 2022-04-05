import logger from '../config/logger.js';
import restartStream from './restartStream.js';
import twitConfig from '../config/twit.config.js';
import translateTerm from './translateTerm.js';
import postTweet from './postTweet.js';
import failureMessage from './response.js';

const streamTweet = () => {
  const stream = twitConfig.stream('statuses/filter', { track: '@web3terms' });

  stream.on('tweet', tweet => {
    logger.info(`Tweet: ${tweet.text}`);

    if (tweet) {
      let { id_str, text, user, entities, retweeted_status } = tweet;

      if (entities.user_mentions.length > 0) {
        entities.user_mentions.forEach(mention => {
          if (mention.screen_name === 'web3terms') {
            text = text.replace(/@web3terms/g, '');
          }
        });
      }

      const newText = text
        .replace(/@web3terms/g, '')
        .replace('explain', '')
        .replace(/\s+/g, ' ')
        .toLowerCase();

      translateTerm(newText.trim())
        .then(meaning => {
          if (meaning) {
            postTweet(twitConfig, meaning, id_str, user?.screen_name)
              .then(() => {
                logger.info('Reply Sent!');
              })
              .catch(error => {
                restartStream(stream);
                logger.error(error);
              });
          } else {
            const _failureMessage = failureMessage();
            postTweet(twitConfig, _failureMessage, id_str, user?.screen_name)
              .then(() => {
                logger.info('Failure Reply Sent!');
              })
              .catch(error => {
                restartStream(stream);
                logger.error(error);
              });
          }
        })
        .catch(error => {
          restartStream(stream);
          logger.error(error);
        });
    }
  });

  stream.on('error', error => {
    logger.error(`Error: ${error}`);
  });

  stream.on('disconnect', error => {
    logger.error(`Disconnect: ${error}`);
  });

  stream.on('reconnect', () => {
    logger.info('Reconnecting...');
  });

  stream.on('connect', () => {
    logger.info('Connected!');
  });

  stream.on('warning', warning => {
    logger.warn(`Warning: ${warning}`);
  });

  stream.on('destroy', () => {
    logger.info('Destroy');
  });

  stream.on('limit', limit => {
    logger.info(`Limit: ${limit}`);
  });

  stream.on('end', () => {
    logger.info('End');
  });
};

export default streamTweet;
