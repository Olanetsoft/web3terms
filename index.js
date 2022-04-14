import express from 'express';
import cors from 'cors';
import streamTweet from './services/streamTweet.js';
import dailyTweet from './services/dailyTweet.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

streamTweet();
dailyTweet();

export default app;
