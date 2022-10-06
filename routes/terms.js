import express from 'express';
import getTerms from '../controllers/termsController.js';

const router = express.Router();

//get terms with pagination
router.get('/terms', getTerms);

export default router;
