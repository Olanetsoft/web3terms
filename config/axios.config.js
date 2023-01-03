import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

let baseURL;

if (process.env.NODE_ENV === 'development') {
  baseURL = process.env.DEV_BASE_URL || 'http://localhost:3000'; // <--- this is the default value
}
// else {
//   baseURL = process.env.PROD_BASE_URL
// }

const web3Client = axios.create({
  baseURL,
  timeout: 1000,
  headers: {
    Accept: 'application.json',
  },
});

export default web3Client;
