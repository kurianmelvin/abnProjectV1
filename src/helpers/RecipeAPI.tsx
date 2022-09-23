//@ts-nocheck
import React, { useState, useEffect } from "react";
import { useRecipeStore } from "@/helpers/store";
import styled from "styled-components";
/*prettier-ignore */

const Input = styled.input`
  width: 100vw;
   border: 1px solid #ccc;
   margin: 8px 0;
 
  padding: 5px 45vw;
  font-size: 2em;
`;

function RecipeAPI() {
  // const [searchTerm, setSearchTerm] = useState("Breakfast");

  const fetchRecipeData = useRecipeStore((state) => state.fetchRecipeData);
  const [query, setQuery] = useState("Breakfast");

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
      <div>
        {/* Search for Recipes */}
        <Input
          type="search"
          placeholder="Search for Recipes"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {/* <input
          type="search"
          placeholder="Search for Recipes"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        /> */}
      </div>
    </>
  );
}

export default RecipeAPI;
