import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
// import App from './App';
import Top from './Top';

// import Home from './Components/Home';
// import FavHC from './Components/FavHC';
// import Healthcare from './Components/Healthcare';
// import Journal from './Components/Journal';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Top />
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
