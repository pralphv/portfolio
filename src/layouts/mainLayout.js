import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import { SpaPage } from "../pages";
import Navigation from "./navigation";

const history = createBrowserHistory();

function WrappedRoutes({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={renderProps => (
        <Navigation>
          <Component {...renderProps} />
        </Navigation>
      )}
    />
  );
}
const MainLayout = () => {
  return (
    <Router history={history}>
      <Switch>
        <WrappedRoutes exact path={"/"} component={SpaPage} />
      </Switch>
    </Router>
  );
};

export default MainLayout;
