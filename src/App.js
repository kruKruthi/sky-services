const express = require('express');
const app = express();
const port = 3000;

app.use('/home', (req, res) => {
    res.send('Welcome to home page!');
});

app.use('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});