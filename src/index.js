import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import MoviesContextProvider from './contexts/MoviesContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <MoviesContextProvider>
    <App />
  </MoviesContextProvider>
   </BrowserRouter>
);
