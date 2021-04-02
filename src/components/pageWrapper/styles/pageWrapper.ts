import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
export const MainContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  overflow: hidden;

  @media (max-width: 1024px) {
    overflow-y: scroll;
  }
`;
