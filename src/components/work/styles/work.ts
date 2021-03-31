import styled from "styled-components/macro";
import { Link as RouterLink } from "react-router-dom";

export const Container = styled.div`
  flex: 0 0 60%;
  display: flex;
  flex-direction: column;
  padding-top: 9rem;
  align-self: flex-end;
  padding-right: 13rem;
  margin-left: auto;
`;

export const Link = styled(RouterLink)`
  font-size: 5.5rem;
  margin-bottom: 4rem;
  text-transform: uppercase;
  white-space: nowrap;
  letter-spacing: -0.5rem;
  transition: 0.5s;
  span {
    margin-left: 10px;
    font-size: 1rem;
    letter-spacing: 0;
  }
  img {
    transform: translate3d(-1rem, 1rem, 0);
    opacity: 0;
    margin-left: 1rem;
    width: 2rem;
    height: 2rem;
    transition: 0.5s;
  }

  &:hover {
    letter-spacing: 0;
    img {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;
