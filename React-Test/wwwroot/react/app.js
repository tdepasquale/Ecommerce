import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Routing } from './components/routing.component.js';
import { BrowserRouter as Router} from 'react-router-dom';


ReactDOM.render(
    <Router>
        <Routing />
    </Router>,
    document.getElementById('root')
);