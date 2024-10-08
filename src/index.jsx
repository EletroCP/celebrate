import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import reportWebVitals from './scripts/reportWebVitals';
import ContextProvider from './scripts/ContextProvider';
import RouterComponent from './scripts/Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <RouterComponent />
    </ContextProvider>
  </React.StrictMode>
);

reportWebVitals();
