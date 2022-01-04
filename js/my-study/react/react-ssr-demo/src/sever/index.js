import app from'./http';
import React from 'react';
import {renderToString} from 'react-dom/server';
import express from 'express';
import Home from '../share/pages/Home';

app.use(express.static('public'));

app.get('/', (req, res) => {
    const content = renderToString(<Home />);

    res.send(`
        <html>
            <head>
                <title>react ssr</title>
            </head>
            <body>
                <div id='root'>${content}</div>
                <script src='bundle.js'></script>
            </body>
        </html>
    `)
});