import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import MoviesContextProvider from './contexts/MoviesContextProvider';
import NavabarContextProvider from './contexts/NavbarContextProvider';
import AuthContextProvider from './contexts/AuthContextProvider';
import MoviesCardContext from './contexts/MoviesCardContext';
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <MoviesCardContext>
    <MoviesContextProvider>
      <AuthContextProvider>
        <NavabarContextProvider>
          <App />
        </NavabarContextProvider>
      </AuthContextProvider>
    </MoviesContextProvider>
   </MoviesCardContext>
 </BrowserRouter>
);
