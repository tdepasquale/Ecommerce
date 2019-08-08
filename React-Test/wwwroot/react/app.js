import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'


ReactDOM.render(
    <ButtonToolbar>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="info">Info</Button>
        <Button variant="light">Light</Button>
        <Button variant="dark">Dark</Button>
        <Button variant="link">Link</Button>
        <Button variant="outline-primary">Primary</Button>
        <Button variant="outline-secondary">Secondary</Button>
        <Button variant="outline-success">Success</Button>
        <Button variant="outline-warning">Warning</Button>
        <Button variant="outline-danger">Danger</Button>
        <Button variant="outline-info">Info</Button>
        <Button variant="outline-light">Light</Button>
        <Button variant="outline-dark">Dark</Button>
    </ButtonToolbar>,
    document.getElementById('root')
);