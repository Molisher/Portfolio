import styled from "styled-components/macro";
import { Link as RouterLink } from "react-router-dom";

import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  flex: 0 0 60%;
  display: flex;
  flex-direction: column;
  padding-top: 9rem;
  align-self: flex-end;
  padding-right: 13rem;
  margin-left: auto;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 10%;
  }
  @media (max-width: 500px) {
    padding: 5%;
  }
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

  @media (max-width: 700px) {
    letter-spacing: 0;
    font-size: 4rem;
  }

  @media (max-width: 500px) {
    font-size: 2rem;
  }
`;
