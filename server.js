const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/api/skills', async (req, res) => {
    try {
        const response = await axios.get('https://api.publicapis.io/proxy?url=https://api.publicapis.io/entries/programming-languages');
        const programmingLanguages = response.data.entries;
        const skills = programmingLanguages.map(language => language.Name);
        res.json(skills);
    } catch (error) {
        console.error('Error fetching skills:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
