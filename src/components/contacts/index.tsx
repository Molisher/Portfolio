import React from "react";
import {
  Container,
  Title,
  Description,
  ExternalLink,
  Wrapper,
  Signature,
} from "./styles/contacts";

import { MainAnimaton } from "../../animation";

export default function Contacts({
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

Contacts.Title = function ({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}) {
  return <Title {...restProps}>{children}</Title>;
};

Contacts.Description = function ({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}) {
  return <Description {...restProps}>{children}</Description>;
};

Contacts.Wrapper = function ({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Contacts.ExternalLink = function ({
  href,
  children,
  target,
  ...restProps
}: {
  href: string;
  children: React.ReactNode;
  target?: string;
}) {
  return (
    <>
      <ExternalLink href={href} target={target} {...restProps}>
        {children}
        <img
          src={`images/icons/diagonal-arrow-svgrepo-com.svg`}
          alt="External link icon"
        />
      </ExternalLink>
    </>
  );
};

Contacts.Signature = function ({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}) {
  return <Signature {...restProps}>{children}</Signature>;
};
