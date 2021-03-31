import React from "react";

import { Container, Content, Title, Row, Column } from "./styles/table";

export default function Table({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}) {
  return <Container {...restProps}>{children}</Container>;
}

Table.Title = function ({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}) {
  return <Title {...restProps}>{children}</Title>;
};

Table.Content = function ({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}) {
  return <Content {...restProps}>{children}</Content>;
};

Table.Row = function ({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}) {
  return <Row {...restProps}>{children}</Row>;
};

Table.Column = function ({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}) {
  return <Column {...restProps}>{children}</Column>;
};
