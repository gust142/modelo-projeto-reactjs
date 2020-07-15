import React, { Suspense, lazy} from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';

const home = lazy(() => import('./pages/home'))
const admin = lazy(() => import('./pages/admin'))
const cadastro = lazy(() => import('./pages/cadastro'))


export default () => (
    <HashRouter>
        <Suspense fallback={<div></div>}>
            <Switch>
                <Route exact path="/" component={home} />
                <Route exact path="/admin" component={admin} />
                <Route exact path="/cadastro" component={cadastro} />
               
            </Switch>
        </Suspense>
    </HashRouter>
);
