import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ChakraProvider, theme} from '@chakra-ui/react';

// theme.config.useSystemColorMode = true; // 是否使用系统主题颜色
ReactDOM.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);
