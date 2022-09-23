//@ts-nocheck
import React, { useState, useEffect } from "react";
import { useRecipeStore } from "@/helpers/store";
import styled from "styled-components";
/*prettier-ignore */

const SearchHome = styled.div`
// position: relative;
// display: inline-block;
width: 100%;
// max-width: 980px;
// margin: 30px;
`

const Input = styled.input`
  height: 70px;
  margin: 0;
  width: 100vw;
  border-radius: 45px;
  padding-right: 85px;
  background: #fff;
  color: #cfcfcf;
  border: none;
  font-size: 1.8em;
  font-weight: 300;
  padding-left: 45vw;
  // display: inline-block;
  position: relative;
`;

function RecipeAPI() {
  // const [searchTerm, setSearchTerm] = useState("Breakfast");

  const fetchRecipeData = useRecipeStore((state) => state.fetchRecipeData);
  const [query, setQuery] = useState("");

  useEffect(() => {
    try {
      fetchRecipeData(query);
    } catch (error) {
      console.log(error);
    }
  }, [query]);

  // console.log(recipeData);
  // console.log("this is  from RecipeAPI.MEALS ", recipeData.meals);
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

{
  /* <input
          type="search"
          placeholder="Search for Recipes"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        /> */
}
