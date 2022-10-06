import express from 'express';
import readData from '../utils/readData.js';

const router = express.Router();


//get all terms
router.get('/terms', async (req, res) => {
    const terms = await readData('terms');
    res.status(200).json(terms);
});

//get terms with pagination
router.get('/terms-with-pagination', async (req, res) => {
    const { page, limit} = req.query;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const terms = await readData('terms.json');
    const results = {};
    if (endIndex < terms.length) {
        results.next = {
            page: parseInt(page) + 1,
            limit: limit
        }
    }
    if (startIndex > 0) {
        results.previous = {
            page: page - 1,
            limit: limit
        }
    }
    results.results = terms.slice(startIndex, endIndex);
    res.json(results);
});


export default router;