import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

const RoutedApp = (
  <Router>
    <App />
  </Router>
);

ReactDOM.render(RoutedApp, document.getElementById('root'));
registerServiceWorker();
