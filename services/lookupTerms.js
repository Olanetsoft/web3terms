import logger from './logger.js';
import faliureMessage from './response.js';
import OpenAi from './openai.config.js';

async function lookupWeb3Term(term) {
  const word = term.toLowerCase();
  const isWeb3Term = await isTermWeb3Related(word);

  if (isWeb3Term) {
    try {
      const prompt = `Define the term "${term}" in the context of web3:`;
      const openaiResponse = await OpenAi(prompt, 18); // Await the response here
      return openaiResponse;
    } catch (error) {
      logger.error('Error from OpenAI:', error);
      return `Oops! Something went wrong while fetching the definition. \n\n${faliureMessage()}`;
    }
  } else {
    return `The term "${term}" is not related to web3.`;
  }
}

async function isTermWeb3Related(term) {
  const prompt = `Is the term "${term}" related to web3? \n\n${faliureMessage()}`;

  try {
    const openaiResponse = await OpenAi(prompt, 1); // Await the response here
    return openaiResponse.toLowerCase() === 'yes';
  } catch (error) {
    logger.error('Error from OpenAI:', error);
    return true;
  }
}

export default lookupWeb3Term;
