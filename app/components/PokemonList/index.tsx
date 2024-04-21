"use client";
import { getPokemonListByCategoryId } from "@/app/api/pokeapi";
import { IPokemonList } from "@/app/interfaces/components";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import SkeletonLoader from "../Loader/SkeletonLoader";
import { Card, ContainerRow, Heading, MainContainer, Text } from "@/app/styled";

const PokemonList: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const { data: pokemons, isLoading } = useQuery<IPokemonList[]>({
    queryKey: ["pokemons"],
    queryFn: () => getPokemonListByCategoryId(type || ""),
  });

  const onClickPokemon = (name: string) => {
    router.push(`/Pokemon?name=${name}`);
  };

  return (
    <MainContainer>
      <Heading>{type}</Heading>
      <ContainerRow>
        {isLoading ? (
          <SkeletonLoader></SkeletonLoader>
        ) : (
          pokemons &&
          pokemons.map(({ pokemon }) => (
            <Card
              onClick={() => onClickPokemon(pokemon.name)}
              key={pokemon.name}
            >
              <Text>{pokemon.name}</Text>
            </Card>
          ))
        )}
      </ContainerRow>
    </MainContainer>
  );
};

export default PokemonList;
