import React from "react";
import { Sidebar } from "../components";
import { ROUTES } from "../constants/ROUTES";

export default function SidebarContainer({
  subtitle,
  link,
}: {
  subtitle: string;
  link?: string;
}) {
  return (
    <Sidebar>
      <Sidebar.BackButton to={link === "back" ? ROUTES.WORK : ROUTES.HOME} />
      <Sidebar.Title>Dmitry Belov</Sidebar.Title>
      <Sidebar.SubTitle>{subtitle}</Sidebar.SubTitle>
    </Sidebar>
  );
}
