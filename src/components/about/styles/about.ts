import styled from "styled-components/macro";

export const Container = styled.div`
  flex: 0 0 60%;
  display: flex;
  flex-direction: column;
  padding-top: 10rem;
  align-self: flex-end;
  padding-right: 13rem;
  margin-left: auto;
`;

export const Title = styled.h1`
  font-size: 85px;
  /* text-shadow: -1px -1px 0 #1a1c1a, 1px -1px 0 #1a1c1a, -1px 1px 0 #1a1c1a, для outlined строк
    1px 1px 0 #1a1c1a; */
  color: #1a1c1a;
  margin-bottom: 8rem;
`;

export const Description = styled.div`
  width: 20%;
  align-self: flex-end;
`;
