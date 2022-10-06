import fs from 'fs';
import path from 'path';

const __filename = path.resolve();

const web3TermsPath = path.join(__filename, '/data/terms.json');

describe('Check definition Length', () => {
  // Read the file
  const data = fs.readFileSync(web3TermsPath, 'utf8');

  if (!data) {
    return [];
  }
  const parsedData = JSON.parse(data);

  parsedData.forEach(termObject => {
    it(`"${termObject.term}" definition should be less than or equal 280, got ${termObject.meaning?.length}`, () => {
      expect(termObject.meaning?.length).toBeLessThanOrEqual(280);
    });
  });
});
