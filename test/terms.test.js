import fs from 'fs';
import path from 'path';

const __filename = path.resolve();

const web3TermsPath = path.join(__filename, '/data/terms.json');

describe('terms.json', () => {
  const data = fs.readFileSync(web3TermsPath, 'utf8');
  const parsedData = JSON.parse(data);

  describe('Check term casing', () => {
    // Assert
    parsedData.forEach(definition => {
      it(`should be lowercase: ${definition.term}`, () => {
        expect(definition.term).toEqual(definition.term?.toLowerCase());
      });
    });
  });

  describe('Check definition Length', () => {
    // Assert
    parsedData.forEach(termObject => {
      it(`"${termObject.term}" definition should be less than or equal 280, got ${termObject.meaning?.length}`, () => {
        expect(termObject.meaning?.length).toBeLessThanOrEqual(280);
      });
    });
  });
});
