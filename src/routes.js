import React, { Suspense, lazy} from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import HomePage from './views/home'
import CadastroPage from './views/cadastro'

export default () => (
    <HashRouter>
        <Suspense fallback={<div></div>}>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/cadastro" component={CadastroPage} />
            </Switch>
        </Suspense>
    </HashRouter>
);
