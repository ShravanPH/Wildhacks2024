import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import LandingPage from './Components/LandingPage';

import getLPTheme from './Styles/getLPTheme';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={createTheme(getLPTheme('light'))}>
      <CssBaseline/>
    {/* <App /> */}
    <LandingPage></LandingPage>
    </ThemeProvider>
  </React.StrictMode>
);


