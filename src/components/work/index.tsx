import React from "react";

import { Container, Link } from "./styles/work";

import { MainAnimaton } from "../../animation";

export default function Work({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}) {
  return (
    <Container
      variants={MainAnimaton}
      initial="hidden"
      animate="show"
      exit="exit"
      {...restProps}
    >
      {children}
    </Container>
  );
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
