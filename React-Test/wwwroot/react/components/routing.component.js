import React from 'react';
import { Route } from 'react-router-dom';
import { Homepage } from '../pages/homepage.component';

export const Routing = () => {
    return (
        <React.Fragment>
            <Route exact path='/' component={Homepage} />
        </React.Fragment>
    );
}