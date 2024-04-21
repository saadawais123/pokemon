import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 12px;
  row-gap: 8px;
  overflow-y: auto;
`;

export const Heading = styled.h1`
  color: #000;
  font-weight: bold;
  font-size: 20px;
  padding: 8px 0;
  text-transform: capitalize;
`;

export const ContainerRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  flex: 1;
  width: 100%;
  row-gap: 8px;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  min-width: 24%;
  min-height: fit-content;
  padding: 1%;
  border: 1px solid #000;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.3);
  }
`;

export const Text = styled.p`
  color: #000;
  text-align: center;
  text-transform: capitalize;
`;
