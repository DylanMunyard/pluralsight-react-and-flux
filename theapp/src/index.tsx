import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react';
import { render } from "react-dom";
import App from "./components/App";
import {BrowserRouter as Router} from "react-router-dom";

render(
  <React.StrictMode>
    <Router>
        <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);