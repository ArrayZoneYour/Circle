import {modules} from "../modules.registry";
import {Route, Switch} from "react-router";
import * as React from "react";

export const RouterOutlet = () => <Switch>
    {Object.keys(modules).map((path) => <Route key={path} exact path={path ? path : '/'} component={modules[path]} />)}
    <Route component={modules.hasOwnProperty('/404') ? modules['/404'] : () => (<div>404</div>)} />
</Switch>;