// NODE MODULE IMPORTS
import React from 'react';
import { hydrate, render } from "react-dom";

// LOCAL REQUIREMENTS
import reportWebVitals from './library/reportWebVitals';
import * as serviceWorkerRegistration from './library/serviceWorkerRegistration';

// APPLICATION IMPORTS
import './index.css';
import Home from './apps/home/home';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';

// SERVER SIDE RENDERING
const _targetFunc = () => {
  if (document.getElementById("root")?.hasChildNodes())
    return hydrate
  return render
}
const targetFunc = _targetFunc()

// APPLICATION INDEX
targetFunc(
  <React.StrictMode>
    <Navbar />
    <div id="article">
      <div id="article-content">
        <Home />
      </div>
    </div>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
)

// SERVICE WORKER
serviceWorkerRegistration.unregister();

// WEB VITALS
reportWebVitals();
