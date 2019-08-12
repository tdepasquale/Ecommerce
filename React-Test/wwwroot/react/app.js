import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Routing } from './components/routing.component.js';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
        <Routing />
    </BrowserRouter>,
    document.getElementById('root')
);