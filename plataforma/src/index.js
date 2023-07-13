import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './css/style.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
