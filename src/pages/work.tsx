import React from "react";
import { Sidebar, Work as WorkComp } from "../components";
import { ROUTES } from "../constants/ROUTES";

export default function Work() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Sidebar>
        <Sidebar.BackButton to={ROUTES.HOME} />
        <Sidebar.Title>Dmitry Belov</Sidebar.Title>
        <Sidebar.SubTitle>About</Sidebar.SubTitle>
      </Sidebar>
      <WorkComp>
        <WorkComp.Link to={ROUTES.PICTERESQUE} number="01">
          Picteresque
        </WorkComp.Link>
        <WorkComp.Link to={ROUTES.REACTPLAYER} number="02">
          React Player
        </WorkComp.Link>
      </WorkComp>
    </div>
  );
}
