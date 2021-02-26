// NODE MODULE IMPORTS
import React from 'react';
import ReactDOM from 'react-dom';

// LOCAL REQUIREMENTS
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// APPLICATION IMPORTS
import './index.css';
import User from './apps/User';

// INDEX
ReactDOM.render(
  <div className="App">
    <User/>
  </div>,
  document.getElementById('root')
);

// SERVICE WORKER
serviceWorkerRegistration.unregister();

// WEB VITALS
reportWebVitals();
