import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { HomePage } from '../pages/homepage.component';
import ShopPage from '../pages/shop.component.js';

export const Routing = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/shop' component={ShopPage} />
                <Route component={HomePage} />
            </Switch>
        </React.Fragment>
    );
}