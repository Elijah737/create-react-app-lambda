import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Blog from './components/Blog'
import Page2 from './components/Page2'
import Resume from './components/Resume'

export default (
    <Switch>
        <Route exact path='/' component={Resume} />
        <Route path='/2' component={Page2} />
        <Route path='/blog' component={Blog} />
    </Switch>
);