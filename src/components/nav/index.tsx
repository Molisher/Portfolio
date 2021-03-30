import React from "react";
import { useMouse } from "../../hooks/useMouse";
import { Container, Link, Inner, Break, Number } from "./styles/nav";

export default function Nav({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}) {
  const [translate, target] = useMouse(window.innerWidth);
  return (
    <Container>
      <Inner positionX={translate} ref={target} {...restProps}>
        {children}
      </Inner>
    </Container>
  );
}

Nav.Link = function NavLink({
  to,
  children,
  ...restProps
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <Link to={to} {...restProps}>
      {children}
    </Link>
  );
};

Nav.Break = function NavBreak({ ...restProps }) {
  return <Break {...restProps} />;
};

Nav.Number = function NavNumber({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}) {
  return <Number {...restProps}>{children}</Number>;
};
