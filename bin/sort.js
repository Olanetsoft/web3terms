import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const web3TermsPath = path.join(__dirname, '../data/terms.json');

const sortData = () => {
  // Read the file
  const data = fs.readFileSync(web3TermsPath, 'utf8');

  if (!data) {
    return [];
  }
  const parsedData = JSON.parse(data);
  // Sort in alphabetical order ( CASE-INSENSITIVE )
  const sortedData = parsedData.sort((a, b) => {
    if (a.term.toLowerCase() > b.term.toLowerCase()) return 1;
    if (a.term.toLowerCase() < b.term.toLowerCase()) return -1;
    return 0;
  });

  // Update the file
  return fs.writeFileSync(web3TermsPath, JSON.stringify(sortedData, null, 2));
};

sortData();
