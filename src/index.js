import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const Element = document.getElementById("root");

const Root = ReactDOM.createRoot(Element);

Root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
