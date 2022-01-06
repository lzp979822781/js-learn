import app from'./http';
import express from 'express';
import {matchRoutes} from 'react-router-config';
import render from './render';
import createStore from './createStore';
import routes from '../share/routes';

app.use(express.static('public'));

app.get('*', (req, res) => {
    const store = createStore();
    const promises = matchRoutes(routes, req.path).map(({route}) => {
        if (route.loadData) {
            return route.loadData(store);
        }
    });
    Promise.all(promises).then(data => {
        res.send(render(req, store));
    })
});