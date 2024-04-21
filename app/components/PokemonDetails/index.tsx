"use client";
import React from "react";
import styled from "styled-components";
import Graph from "../Graph/index";

import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { IPokemonDetails } from "@/app/interfaces/components";
import { getPokemonDetailsByName } from "@/app/api/pokeapi";
import PokemonCard from "../PokemonCard";
import SkeletonLoader from "../Loader/SkeletonLoader";
import { MainContainer } from "@/app/styled";

const PokemonDetails: React.FC = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const { data: pokemon, isLoading } = useQuery<IPokemonDetails>({
    queryKey: ["pokemon"],
    queryFn: () => getPokemonDetailsByName(name || ""),
  });
  return (
    <MainContainer>
      {isLoading ? (
        <SkeletonLoader></SkeletonLoader>
      ) : (
        pokemon && (
          <>
            <PokemonCard
              name={pokemon.name}
              picture={pokemon.sprites.front_default}
            />
            <Graph stats={pokemon.stats} />
          </>
        )
      )}
    </MainContainer>
  );
};

export default PokemonDetails;
