import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { items } from './items_data'
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App items={items}/>
  </React.StrictMode>
);

