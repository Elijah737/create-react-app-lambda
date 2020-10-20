import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Page from './components/Page'
import Page2 from './components/Page2'

export default (
    <Switch>
        <Route exact path='/' component={Page} />
        <Route path='/2' component={Page2} />
    </Switch>
);