//@ts-nocheck
import React, { useState, useEffect } from "react";
import { useRecipeStore } from "@/helpers/store";
import styled from "styled-components";

const SearchHome = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  padding-top: 20px;
`;

const Input = styled.input`
  height: 75px;
  margin: 0;
  width: 99.195vw;
  border-radius: 45px;
  padding-right: 85px;
  background: #fff;
  color: #cfcfcf;
  border: none;
  font-size: xxx-large;
  font-weight: 300;
  padding-left: 43vw;
  position: relative;
`;

function RecipeAPI() {
  const fetchRecipeData = useRecipeStore((state) => state.fetchRecipeData);
  // const [query, setQuery] = useState("Arrabiata");
  const [query, setQuery] = useState("breakfast");

  useEffect(() => {
    try {
      fetchRecipeData(query);
    } catch (error) {
      console.log(error);
    }
  }, [query]);

  return (
    <>
      <SearchHome>
        {/* Search for Recipes */}
        <Input
          type="search"
          placeholder="Search for Recipes"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </SearchHome>
    </>
  );
}

export default RecipeAPI;
