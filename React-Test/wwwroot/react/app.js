import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { Homepage } from './pages/homepage.component.js';


ReactDOM.render(
    <Homepage />, document.getElementById('root')
);