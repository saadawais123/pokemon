"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPokemonCategories } from "../../api/pokeapi";

import CategoryList from "../CategoryList";
import { Category } from "@/app/interfaces/components";
import { useRouter } from "next/navigation";
import SkeletonLoader from "../Loader/SkeletonLoader";
import { Heading, MainContainer } from "@/app/styled";

const HomePage: React.FC = () => {
  const router = useRouter();

  const { data: categories, isLoading } = useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: getPokemonCategories,
  });

  const onClickCategory = (name: string) => {
    router.push(`/PokemonList?type=${name}`);
  };

  return (
    <MainContainer>
      <Heading>Categories</Heading>
      {isLoading ? (
        <SkeletonLoader></SkeletonLoader>
      ) : (
        categories && (
          <CategoryList onClick={onClickCategory} categories={categories} />
        )
      )}
    </MainContainer>
  );
};

export default HomePage;
