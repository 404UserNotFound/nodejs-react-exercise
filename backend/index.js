import express from 'express';
import cors from 'cors';
import fs from 'fs';

const app = express();
const port = 3001;

app.use(cors());

let companies = [];

try {
    const rawData = fs.readFileSync('./data.json', 'utf-8');
    const parsed = JSON.parse(rawData);
    companies = parsed.items || [];
    console.log(`Loaded ${companies.length} companies from local file.`);
} catch (err) {
    console.error('Failed to load local data.json:', err.message);
}

app.get('/api/companies', (req, res) => {
    res.json(companies);
});

app.listen(port, () => {
    console.log(`API server running on http://localhost:${port}`);
});