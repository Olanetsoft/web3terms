import fetchTerms from '../services/terms.js';
import readData from '../utils/readData.js';

const getTerms = async (req, res) => {
  const terms = await readData('terms.json');

  const { page, limit } = req.query;

  const result = await fetchTerms(
    +page && +page > 0 ? +page : 1,
    +limit && +limit > 0 ? +limit : 10,
    terms
  );
  res.status(200).json(result);
};

export default getTerms;
