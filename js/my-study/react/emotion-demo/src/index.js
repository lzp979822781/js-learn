import React from 'react';
import ReactDOM from 'react-dom';
import App from './AppStyleComponent';
import 'antd/dist/antd.css';

import {ThemeProvider} from '@emotion/react';

const theme = {
  colors: {
    primary: 'darkmagenta'
  }
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
      <App />
  </ThemeProvider>
 ,
  document.getElementById('root')
);
