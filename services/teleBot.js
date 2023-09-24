import logger from '../config/logger.js';
import bot from '../config/telegraf.config.js';
import translateTerm from './translateTerms.js';
import faliureMessage from './response.js';
import getRandomTerms from './randomTerms.js';
import otherResponse from './otherReponse.js';

// Handle Basic Commands
bot.start(ctx => {
  ctx.reply(`Hi ${ctx.from.first_name} ${otherResponse()[0]}`);
  logger.info('Telegram /start command was used');
});

bot.help(ctx => {
  ctx.reply(otherResponse()[1], {
    parse_mode: 'Markdown',
  });
  logger.info('Telegram /help command was used');
});

// Handling Custom Commands
bot.command('about', ctx => {
  ctx.reply(otherResponse()[2], {
    parse_mode: 'Markdown',
  });
  logger.info('Telegram /about command was used');
});

bot.command('terms', async ctx => {
  const randomTerms = await getRandomTerms();
  // console.log(randomTerms);

  const formattedTerms = randomTerms
    .map((termObj, index) => {
      const capitalizedTerm =
        termObj.term.charAt(0).toUpperCase() + termObj.term.slice(1);
      return `${index + 1}. ${capitalizedTerm}\nMeaning: ${termObj.meaning}\n`;
    })
    .join('\n');
  ctx.reply(`Here are 10 random web3 terms I know: \n\n ${formattedTerms}`);
});

bot.use(async ctx => {
  const term = ctx.message.text;
  const meaning = await translateTerm(term.toLowerCase());
  if (!meaning) {
    ctx.reply(faliureMessage());
    logger.info(`${ctx.from.first_name} tried to find the meaning of ${term}`);
    return;
  }

  ctx.reply(`  ${term}: \n\n ${meaning}`);
  logger.info(`${ctx.from.first_name} tried to find the meaning of ${term}`);
});

bot.launch(logger.info('Telegram Bot is running...'));
