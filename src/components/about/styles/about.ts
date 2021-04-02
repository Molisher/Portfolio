import styled from "styled-components/macro";

import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  flex: 0 0 60%;
  display: flex;
  flex-direction: column;
  padding-top: 10rem;
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
  /* text-shadow: -1px -1px 0 #1a1c1a, 1px -1px 0 #1a1c1a, -1px 1px 0 #1a1c1a, для outlined строк
    1px 1px 0 #1a1c1a; */
  color: #1a1c1a;
  margin-bottom: 8rem;

  @media (max-width: 700px) {
    margin-top: 1rem;
    font-size: 3rem;
  }
`;

export const Description = styled.div`
  width: 50%;
  font-size: 1.2rem;
  align-self: flex-end;
  margin: 10px 0;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;
