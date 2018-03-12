import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import store from './stores/index'

console.log(store);
useStrict(true)
ReactDOM.render(
    <Provider {...store}>
        <Router basename="/">
            <App />
        </Router>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
