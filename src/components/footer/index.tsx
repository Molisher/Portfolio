import React from "react";

import { Container, Link } from "./styles/footer";

export default function Footer({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Link = function FooterLink({
  href,
  target,
  children,
  ...restProps
}: {
  href: string;
  target: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} target={target} {...restProps}>
      {children}
    </Link>
  );
};
