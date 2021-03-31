import React from "react";
import { Switch, Route } from "react-router-dom";

import { ROUTES } from "./constants/ROUTES";

import Home from "./pages/home";

const About = React.lazy(() => import("./pages/about"));
const ContactPage = React.lazy(() => import("./pages/contacts"));
const Work = React.lazy(() => import("./pages/work"));
const Picteresque = React.lazy(() => import("./pages/picteresque"));
const ReactPlayer = React.lazy(() => import("./pages/reactPlayer"));

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
        <Route path={ROUTES.WORK}>
          <Work />
        </Route>
        <Route path={ROUTES.CONTACT}>
          <ContactPage />
        </Route>
        <Route path={ROUTES.PICTERESQUE}>
          <Picteresque />
        </Route>
        <Route path={ROUTES.REACTPLAYER}>
          <ReactPlayer />
        </Route>
      </React.Suspense>
    </Switch>
  );
}
