import styled from "styled-components/macro";

import { Link as ReactRouterLink } from "react-router-dom";

interface InnerProps {
  positionX: number;
}

export const Container = styled.nav`
  display: flex;
  width: 100%;
  transform: translateX(-35%);
`;

export const Inner = styled.ul.attrs<InnerProps>(({ positionX }) => ({
  style: {
    transform: `translateX(${positionX}%)`,
  },
}))<InnerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition-duration: 0.5s;
  transition-timing-function: ease-out;

  padding-right: 60%;
`;

export const Link = styled(ReactRouterLink)`
  font-size: 200px;
  text-transform: uppercase;
  color: rgba(26, 28, 26, 0.5);
  transition: 1s ease-out;

  &:hover {
    color: rgba(26, 28, 26, 1);
  }
`;

export const Break = styled.div`
  transform: translateY(-20px);
  display: block;
  background-color: #1a1c1a;
  height: 3px;
  padding: 0 25px;
  margin: 0 50px;
`;

export const Number = styled.span`
  align-self: flex-start;
`;
