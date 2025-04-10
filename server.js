const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/grafikon', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'grafikon.html'));
});

app.get('/slike', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'slike.html'));
});

app.listen(port, () => {
    console.log(`Server radi na http://localhost:${port}`);
});