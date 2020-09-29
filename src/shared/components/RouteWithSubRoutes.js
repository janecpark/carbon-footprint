import React from 'react';
import { Route } from 'react-router-dom';

/** Routes component renders all of the routes and their subroutes */

function RouteWithSubRoutes(route) {
    return (
        <Route
            exact path={route.path}
            render={props => (
                <route.component {...props} routes={route.routes} />
            )}
        />
      
    );
}

export default RouteWithSubRoutes;
