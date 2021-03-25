// NODE MODULE IMPORTS
import { StrictMode } from 'react';
import { hydrate, render } from "react-dom";

// LOCAL REQUIREMENTS
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// APPLICATION IMPORTS
import './index.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Browser from './apps/browser/browser';

// SERVER SIDE RENDERING
const _targetFunc = () => {
  if (document.getElementById("root")?.hasChildNodes())
    return hydrate
  return render
}
const targetFunc = _targetFunc()

// INDEX
targetFunc(
  <StrictMode>
    <Header />
    <Browser />
    <Footer />
  </StrictMode>,
  document.getElementById('root')
)

// SERVICE WORKER
serviceWorkerRegistration.unregister();

// WEB VITALS
reportWebVitals();
