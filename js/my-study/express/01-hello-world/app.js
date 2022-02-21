const express = require('express');

const app = express();

app.get("/", (req, res) => {
    console.log('req', req.url);
    res.send('get request');
});

app.post('/', (req, res) => {
    res.send('post request')
})

app.put('/user', (req, res) => {
    res.send('put user')
});

app.delete('/user', (req, res) => {
    res.send('delete user')
});

app.listen(4000, () => {
    console.log('server is running ');
});