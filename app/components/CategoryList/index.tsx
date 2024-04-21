// components/CategoryList/index.tsx
import { Category } from "@/app/interfaces/components";
import { Card, ContainerRow, Text } from "@/app/styled";
import React from "react";

interface Props {
  categories: Category[];
  onClick: (name: string) => void;
}

const CategoryList: React.FC<Props> = ({ categories, onClick }) => {
  return (
    <ContainerRow>
      {categories.map((category) => (
        <Card onClick={() => onClick(category.name)} key={category.url}>
          <Text>{category.name}</Text>
        </Card>
      ))}
    </ContainerRow>
  );
};

export default CategoryList;
