import React from "react";
import { PageWrapper, Work as WorkComp } from "../components";
import { ROUTES } from "../constants/ROUTES";
import { SidebarContainer } from "../containers";

export default function Work() {
  return (
    <PageWrapper>
      <SidebarContainer subtitle="Work" />
      <WorkComp>
        <WorkComp.Link to={ROUTES.PICTERESQUE} number="01">
          Picteresque
        </WorkComp.Link>
        <WorkComp.Link to={ROUTES.REACTPLAYER} number="02">
          React Player
        </WorkComp.Link>
      </WorkComp>
    </PageWrapper>
  );
}
