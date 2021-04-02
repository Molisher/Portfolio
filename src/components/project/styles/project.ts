import styled from "styled-components/macro";

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

export const Title = styled.h1`
  font-size: 85px;
  text-transform: uppercase;
  margin-bottom: 8rem;
  white-space: nowrap;

  @media (max-width: 700px) {
    margin-top: 1rem;
    font-size: 3rem;
  }
  @media (max-width: 400px) {
    margin-top: 1rem;
    font-size: 2.5rem;
  }
`;

export const Wrapper = styled.div`
  /* width: 60%; */
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Description = styled.div`
  padding: 10px 0;
`;

export const Meta = styled.div`
  margin-bottom: 5rem;
  h4 {
    text-transform: uppercase;
    color: rgba(26, 28, 26, 0.5);
    margin-bottom: 1.5rem;
  }
`;

export const ExternalLink = styled.a`
  margin: 2rem 0;
  font-size: 1.2rem;
  img {
    margin-left: 10px;
    height: 0.8rem;
    width: 0.8rem;
    transition: 0.5s;
  }

  &:hover {
    img {
      transform: translate3d(4px, -4px, 0);
    }
  }
`;

export const Image = styled.div`
  position: relative;
  margin: 5rem 0;
  img {
    /* position: absolute; */
    top: 0;
    margin-left: -20%;
    width: 140%;
  }

  @media (max-width: 1150px) {
    img {
      width: 100%;
      margin: 0;
    }
  }
`;
