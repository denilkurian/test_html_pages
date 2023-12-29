

// proxy-server.mjs

import fetch from 'node-fetch';
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3010;

app.use(cors());

app.get('/', async (req, res) => {
    try {
        const response = await fetch('http://122.165.80.8/');
        const data = await response.text();
        res.send(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server running on http://localhost:${PORT}`);
});












