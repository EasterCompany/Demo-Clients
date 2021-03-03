// NODE MODULE IMPORTS
import React from 'react';
import ReactDOM from 'react-dom';

// LOCAL REQUIREMENTS
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// APPLICATION IMPORTS
import './index.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Browser from './apps/browser/browser';

// INDEX
ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Browser />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// SERVICE WORKER
serviceWorkerRegistration.register();

// WEB VITALS
reportWebVitals();
