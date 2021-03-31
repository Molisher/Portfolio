import styled from "styled-components/macro";

export const Container = styled.div`
  flex: 0 0 60%;
  display: flex;
  flex-direction: column;
  padding-top: 9rem;
  align-self: flex-end;
  padding-right: 13rem;
  margin-left: auto;
`;

export const Title = styled.h1`
  font-size: 85px;
  text-transform: uppercase;
  margin-bottom: 8rem;
`;

export const Description = styled.div`
  font-size: 1.2rem;
`;

export const ExternalLink = styled.a`
  font-size: 1.2rem;
  display: flex;
  margin-bottom: 2.5rem;
  align-items: center;

  img {
    margin-left: 0.5rem;
    height: 1rem;
    width: 1rem;
    padding-bottom: 0.1rem;
    transition-duration: 0.5s;
  }
  &:hover {
    img {
      transform: translate3d(4px, -4px, 0);
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  width: 50%;
`;

export const Signature = styled.div`
  font-size: 1.1rem;
  margin-top: 1rem;
`;
