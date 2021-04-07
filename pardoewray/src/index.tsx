// NODE MODULE IMPORTS
import React from 'react';
import { hydrate, render } from "react-dom";
import { BrowserRouter as Router, Switch } from "react-router-dom";

// LOCAL REQUIREMENTS
import reportWebVitals from './library/reportWebVitals';
import * as serviceWorkerRegistration from './library/serviceWorkerRegistration';

// APPLICATION IMPORTS
import './index.css';
import Routes from './routes';
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
    <Router>
      <Navbar />
      <div id="article">
        <div id="article-content">
          <Switch>
            <Routes />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// SERVICE WORKER
serviceWorkerRegistration.unregister();

// WEB VITALS
reportWebVitals();
