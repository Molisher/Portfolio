import React from "react";

import { HeaderContainer, NavContainer, FooterContainer } from "../containers";
import { PageWrapper } from "../components";

export default function Home() {
  return (
    <PageWrapper type="main">
      <HeaderContainer />
      <NavContainer />
      <FooterContainer />
    </PageWrapper>
  );
}
