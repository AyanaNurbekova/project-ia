import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import MoviesContextProvider from './contexts/MoviesContextProvider';
import MoviesCardContext from './contexts/MoviesCardContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <MoviesContextProvider>
    <MoviesCardContext>
    <App />
    </MoviesCardContext>
  </MoviesContextProvider>
   </BrowserRouter>
);
