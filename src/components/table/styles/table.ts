import styled from "styled-components/macro";

export const Container = styled.div`
  margin-top: 20rem;
  padding-bottom: 5rem;
`;
export const Title = styled.h2`
  text-transform: uppercase;
  font-size: 3rem;
  letter-spacing: 5px;
  border-bottom: 3px solid rgba(26, 28, 26, 0.9);
  margin-bottom: 5rem;
`;

export const Row = styled.div`
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-between;
`;
export const Column = styled.div`
  &:first-of-type {
    width: 40%;
  }
  &:last-of-type {
    width: 20%;
    text-align: end;
  }
  flex-grow: 1;
`;
export const Content = styled.div``;
