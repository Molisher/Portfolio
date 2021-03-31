import React from "react";

import { Container, Link } from "./styles/work";

export default function Work({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}) {
  return <Container {...restProps}>{children}</Container>;
}

Work.Link = function ({
  children,
  to,
  number,
  ...restProps
}: {
  children: React.ReactNode;
  to: string;
  number: string;
}) {
  return (
    <Link to={to} {...restProps}>
      {children}
      <span>{number}</span>
      <img
        src={`/images/icons/diagonal-arrow-svgrepo-com.svg`}
        alt="Link to project"
      />
    </Link>
  );
};
