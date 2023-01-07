const express = require('express');

const app = express();

app.use(express.json());

const {getDb, getItem} = require('./db.js');

app.get('/todos', async (req, res) => {
    try {
        const data = await getDb();
        res.status(200).json(data.todos);
    } catch(e) {
        res.status(500).json({
            error: e.message
        })
    }
});

app.get('/todos', async (req, res) => {
    try {
        const data = await getDb();
        res.status(200).json(data.todos);
    } catch(e) {
        res.status(500).json({
            error: e.message
        })
    }
});

app.get('/todos/:id', async (req, res) => {
    try {
        const data = await getDb();
        const item = getItem(data.todos, parseInt(req.params.id, 10));
        if (!item) {
            return res.status(404).end();
        }
        res.status(200).json(item);
    } catch(e) {
        res.status(500).json({
            error: e.message
        })
    }
});

app.listen(4000, () => {
    console.log('server is listening');
});