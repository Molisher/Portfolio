import React from "react";

import { HeaderContainer, NavContainer, FooterContainer } from "../containers";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-around",
        overflow: "hidden",
      }}
    >
      <HeaderContainer />
      <NavContainer />
      <FooterContainer />
    </div>
  );
}
