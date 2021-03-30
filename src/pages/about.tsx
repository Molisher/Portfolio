import React, { useRef, useEffect } from "react";
import { Sidebar, AboutComp } from "../components";
import { ROUTES } from "../constants/ROUTES";

export default function About() {
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
      <AboutComp>
        <AboutComp.Title>DIGITAL DESIGNER & CREATIVE DIRECTOR</AboutComp.Title>
        <AboutComp.Description>
          I'm currently serving as an Associate Creative Director at Handsome, a
          holistic experience design agency based in Austin, Texas. On occasion,
          I take on freelance projects that pique my interest. EXPERIENCE
        </AboutComp.Description>
      </AboutComp>
    </div>
  );
}
