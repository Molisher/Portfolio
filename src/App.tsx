import React from "react";
import { Switch, Route } from "react-router-dom";

import { ROUTES } from "./constants/ROUTES";

import Home from "./pages/home";

const About = React.lazy(() => import("./pages/about"));

export default function App() {
  return (
    <Switch>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
        <Route path={ROUTES.ABOUT}>
          <About />
        </Route>
      </React.Suspense>
    </Switch>
  );
}
