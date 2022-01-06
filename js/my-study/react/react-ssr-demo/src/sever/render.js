import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import {Provider} from 'react-redux';
import routes from '../share/routes';

export default (req, store) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path}>
                {renderRoutes(routes)}
            </StaticRouter>
        </Provider>
    );

    const initalState = store.getState();
    return `
        <html>
            <head>
                <title>react ssr</title>
            </head>
            <body>
                <div id='root'>${content}</div>
                <script src='bundle.js'></script>
                <script>window.INITIAL_STATE=${initalState}</script>
            </body>
        </html>
    `
}