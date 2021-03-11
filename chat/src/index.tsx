// NODE MODULE IMPORTS
import React from 'react';
import { hydrate, render } from "react-dom";

// LOCAL REQUIREMENTS
import reportWebVitals from './library/reportWebVitals';
import * as serviceWorkerRegistration from './library/serviceWorkerRegistration';

// APPLICATION IMPORTS
import './index.css';
import App from './apps/App';

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
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// SERVICE WORKER
serviceWorkerRegistration.unregister();

// WEB VITALS
reportWebVitals();
