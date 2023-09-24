import readData from './readData.js';
import logger from '../config/logger.js';

const getRandomTerms = async () => {
  try {
    const data = await readData();

    // Get 10 random indices from the data array
    const randomIndices = [];
    while (randomIndices.length < 10) {
      const randomIndex = Math.floor(Math.random() * data.length);
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
      }
    }

    // Retrieve terms and meanings based on the random indices
    const randomTerms = randomIndices.map(index => {
      return {
        term: data[index].term,
        meaning: data[index].meaning,
      };
    });

    return randomTerms;
  } catch (error) {
    logger.error('Error fetching random terms:', error);
    return [];
  }
};

export default getRandomTerms;
