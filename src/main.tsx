import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router';   // ← React Router v7
import App from './App';
import './index.css';                           // Tailwind entry

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>        {/* Router context for the whole app */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
