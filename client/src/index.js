import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import App from './App';
import { store } from './store';

const theme = createTheme({
  typography: {
    fontFamily: 'Raleway, sans-serif',
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root'),
);
