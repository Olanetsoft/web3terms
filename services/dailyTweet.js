// Tweet every morning at 8am
import schedule from 'node-schedule';
import postDailyTweet from './postDailyTweet.js';
import logger from '../config/logger.js';
import twitConfig from '../config/twit.config.js';
import readData from '../utils/readData.js';

const dailyTweet = () => {
  schedule.scheduleJob('0 8 * * *', async () => {
    logger.info('Tweeting daily at 9am...');

    const data = await readData();
    // Read the file and past the data to the postTweet function

    if (data.length > 0) {
      // pick a random term
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomMeaning = data[randomIndex].meaning;

      // post the tweet
      postDailyTweet(twitConfig, randomMeaning)
        .then(() => {
          logger.info('Daily Tweet Posted!');
        })
        .catch(error => {
          logger.error(error);
        });
    }
  });
};

export default dailyTweet;
