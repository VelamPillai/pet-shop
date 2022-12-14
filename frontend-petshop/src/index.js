import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'

import './index.css';
import App from './App';
import  Container  from './context/Container';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Container>
      <App />
      </Container>
  </BrowserRouter>
);
