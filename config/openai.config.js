import dotenv from 'dotenv';

dotenv.config();

import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_KEY,
});

const openai = new OpenAIApi(configuration);

async function OpenAi(prompt, max_token) {
  await openai.createCompletion(
    {
      prompt: prompt,
      model: 'text-davinci-003',
      max_tokens: max_token,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return OpenAi.data.choices[0].text;
}

export default OpenAi;
