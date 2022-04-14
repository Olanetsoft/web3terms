import fs from 'fs';
import path from 'path';

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

export default readData;
