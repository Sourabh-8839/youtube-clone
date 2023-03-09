import ReactDom from 'react-dom';
import React from 'react';
import App from './App';



import 'bootstrap/dist/css/bootstrap.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './base.scss';

import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import store from './redux/store'


ReactDom.render(
    <Provider store={store}>
        <Router>
        <App />
        </Router>
    </Provider>


,document.getElementById("root"));
