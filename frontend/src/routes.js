import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';

import Logon from './pages/Logon';
import Register from './pages/Register';
import NewIncident from './pages/NewIncident';
import Profile from './pages/Profile';

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/incident/new" component={NewIncident} />
            </Switch>
        </BrowserRouter>
    )
}

