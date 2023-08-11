import { Telegraf } from 'telegraf';
import dotenv from 'dotenv';

dotenv.config();

// Replace with your Telegram Bot API token
const token = process.env.TELEGRAM_TOKEN;

// Create a Telegram bot instance
const bot = new Telegraf(token);

export default bot;
