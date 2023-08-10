import App from './App';
import React from 'react';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, HashRouter, Router} from 'react-router-dom';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>
</React.StrictMode>,
);



reportWebVitals();


