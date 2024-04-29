import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import Footer from './Components/Footer';
import { Features } from './Components/Features'; // Import Features component instead of FeatureCard

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Home />
    <App />
    <Features /> {/* Render the Features component instead of FeatureCard */}
    <Footer />
  </BrowserRouter>
);
