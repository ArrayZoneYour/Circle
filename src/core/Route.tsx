import {modules} from "../modules.registry";
import {Route, Switch} from "react-router-dom";
import * as React from "react";

function WaitingComponent(Component) {
    return props => (
      <React.Suspense fallback={<div>Loading...</div>}>
        <Component {...props} />
      </React.Suspense>
    );
  }

export const RouterOutlet = () => <Switch>
    {Object.keys(modules)
        .map(
            (path) => {
                return (<Route key={path} exact path={path ? path : '/'} component={ WaitingComponent(modules[path])} />)
            }
        )
    }
    {/* <Route component={modules.hasOwnProperty('/404') ? modules['/404'] : () => (<div>404</div>)} /> */}
</Switch>;