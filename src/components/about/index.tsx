import React from "react";

import { Container, Title, Description } from "./styles/about";

export default function AboutComp({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}) {
  return <Container {...restProps}>{children}</Container>;
}

AboutComp.Title = function AboutCompTitle({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}) {
  return <Title {...restProps}>{children}</Title>;
};

AboutComp.Description = function AboutCompDescription({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}) {
  return <Description {...restProps}>{children}</Description>;
};
