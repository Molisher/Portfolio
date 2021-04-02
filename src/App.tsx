import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { About, Contact, Work, Home, Picteresque, ReactPlayer } from "./pages";
import { ROUTES } from "./constants/ROUTES";

export default function App() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
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
          <Contact />
        </Route>
        <Route path={ROUTES.PICTERESQUE}>
          <Picteresque />
        </Route>
        <Route path={ROUTES.REACTPLAYER}>
          <ReactPlayer />
        </Route>
      </Switch>
    </AnimatePresence>
  );
}
