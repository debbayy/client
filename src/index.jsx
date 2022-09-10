import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ShowContextTokenProvider } from './views/components/context/showContext';
import { BrowserRouter as Router } from "react-router-dom";
// import { ShowContextTokenProvider } from "./components/context/showContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShowContextTokenProvider>
      <Router>
        <App />
      </Router>
    </ShowContextTokenProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
