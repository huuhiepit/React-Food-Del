import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import StoreContextProvider from './components/context/StoreContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <StoreContextProvider>
        <App />
      </StoreContextProvider>
    </Router>
  </React.StrictMode>
);