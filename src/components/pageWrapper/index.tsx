import React from "react";
import { MainContainer, Container } from "./styles/pageWrapper";

export default function PageWrapper({
  type,
  children,
  ...restProps
}: {
  type?: string;
  children: React.ReactNode;
}) {
  return type === "main" ? (
    <MainContainer {...restProps}>{children}</MainContainer>
  ) : (
    <Container {...restProps}>{children}</Container>
  );
}
