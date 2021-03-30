import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Container = styled.aside`
  position: fixed;
  display: flex;
  flex: 0 0 10%;
  height: 100%;
  writing-mode: vertical-rl;
  justify-content: space-around;
  align-items: center;
  padding: 20px 50px;
`;

export const Title = styled.h2`
  font-size: 1.1rem;
  text-transform: uppercase;

  transform: rotate(180deg);
`;
export const SubTitle = styled.h3`
  font-size: 1.1rem;
  text-transform: uppercase;
  opacity: 0.5;
  transform: rotate(180deg);
`;
export const BackButton = styled(Link)`
  z-index: 10;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 80px;
  min-height: 80px;
  padding: 8px;
`;
export const Dot = styled.div`
  width: 4px;
  height: 4px;
  margin-right: 2px;
  margin-left: 2px;
  border-radius: 50%;
  background-color: #1a1c1a;
`;

export const Circle = styled.div`
  content: "";
  opacity: 0.5;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  border-style: solid;
  border-width: 1px;
  border-color: #1a1c1a;
  border-radius: 50%;
`;
