import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ChakraProvider} from '@chakra-ui/react'
import theme from "./theme";
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode> Esto invocaba algunos eventos 2 veces, como fetchs a la API....!!!
    <Router>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Router>
  // </React.StrictMode>
);

