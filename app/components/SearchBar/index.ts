// components/SearchBar/index.tsx
import React, { useState } from "react";
import styled from "styled-components";

interface Props {
  onSearch: (query: string) => void;
}

const Container = styled.div`
  // Your styles here
`;

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
    </Container>
  );
};

export default SearchBar;
