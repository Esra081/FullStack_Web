const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Hello  World </h1>'); // HTML string olarak
});

app.get('/about', (req, res) => {
    res.send('<h1>This is a about page. </h1>'); // HTML string olarak
});

app.get('/contact', (req, res) => {
    res.send('<h1>This is a contact page. </h1>'); // HTML string olarak
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
