// components/PokemonCard/index.tsx
import React from "react";
import styled from "styled-components";

interface Props {
  name: string;
  picture: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardHeading = styled.h1`
  text-transform: capitalize;
  color: #000;
  font-size: 20px;
  font-weight: bold;
`;

const PokemonCard: React.FC<Props> = ({ name, picture }) => {
  return (
    <Container>
      <CardHeading>{name}</CardHeading>
      <img width="100px" height="100px" src={picture}></img>
    </Container>
  );
};

export default PokemonCard;
