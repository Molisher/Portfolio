import React from "react";
import {
  Container,
  Title,
  Wrapper,
  Description,
  Meta,
  ExternalLink,
  Image,
} from "./styles/project";

export default function Project({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}) {
  return <Container {...restProps}>{children}</Container>;
}

Project.Title = function ({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}) {
  return <Title {...restProps}>{children}</Title>;
};

Project.Wrapper = function ({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Project.Description = function ({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}) {
  return <Description {...restProps}>{children}</Description>;
};

Project.Meta = function ({
  children,
  title,
  ...restProps
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <Meta {...restProps}>
      <h4>{title}</h4>
      {children}
    </Meta>
  );
};

Project.ExternalLink = function ({
  children,
  href,
  target,
  ...restProps
}: {
  children: React.ReactNode;
  href: string;
  target: string;
}) {
  return (
    <ExternalLink href={href} target={target} {...restProps}>
      {children}
      <img
        src="/images/icons/diagonal-arrow-svgrepo-com.svg"
        alt="Link to site"
      />
    </ExternalLink>
  );
};

Project.Image = function ({ src, ...restProps }: { src: string }) {
  return (
    <Image {...restProps}>
      <img src={src} alt="Site screnshoots" />{" "}
    </Image>
  );
};
