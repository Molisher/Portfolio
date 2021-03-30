import React from "react";
import {
  Container,
  Title,
  SubTitle,
  BackButton,
  Dot,
  Circle,
} from "./styles/sidebar";

export default function Sidebar({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}) {
  return <Container {...restProps}>{children}</Container>;
}

Sidebar.Title = function SidebarTitle({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}) {
  return <Title {...restProps}>{children}</Title>;
};

Sidebar.SubTitle = function SidebarSubTitle({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Sidebar.BackButton = function SidebarBackButton({
  to,
  ...restProps
}: {
  to: string;
}) {
  return (
    <BackButton to={to} {...restProps}>
      <Circle />
      <Dot />
      <Dot />
      <Dot />
    </BackButton>
  );
};
