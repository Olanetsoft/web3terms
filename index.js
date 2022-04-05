import express from 'express';
import cors from 'cors';
import streamTweet from './services/streamTweet.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

streamTweet();

export default app;
