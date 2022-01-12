import express from 'express';
import {DataSource} from './data';

const app = express();

app.get("/", (req, res) => {
    // res.end('111');
    res.json(DataSource.list);
});

app.listen(8080, () => {
    console.log('server is running');
});