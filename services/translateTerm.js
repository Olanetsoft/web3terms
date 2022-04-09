import fs from 'fs';
import path from 'path';
import logger from '../config/logger.js';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const web3TermsPath = path.join(__dirname, '../data/terms.json');

// Read the file
const readData = () => {
  const data = fs.readFileSync(web3TermsPath, 'utf8');

  if (!data) {
    return [];
  }
  const parsedData = JSON.parse(data);

  return parsedData;
};

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
