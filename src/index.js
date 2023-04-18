import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter  } from 'react-router-dom';

import { BooksProvider } from './context/BooksContext';
import { FavProvider } from './context/FavContext';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <BooksProvider>
        <FavProvider>
          <App />
        </FavProvider>
      </BooksProvider>
    </BrowserRouter>
  </React.StrictMode>
);


