import React from "react";

import { Container, Title, SubTitle } from "./styles/header";

export default function Header({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Title = function HeaderTitle({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}) {
  return <Title {...restProps}>{children}</Title>;
};

Header.SubTitle = function HeaderSubTitle({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
