import logger from '../config/logger.js';
import readData from '../utils/readData.js';

const translateTerm = async text => {
  const data = await readData();

  if (data.length > 0) {
    const termData = data.find(item => item.term.toLowerCase() === text);

    if (termData) {
      logger.info('Data Found!');
      return termData.meaning;
    }
  }
};

export default translateTerm;
