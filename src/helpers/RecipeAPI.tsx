//@ts-nocheck
import React, { useState, useEffect } from "react";
import { useRecipeStore } from "@/helpers/store";

/*prettier-ignore */

function RecipeAPI() {
  // const [searchTerm, setSearchTerm] = useState("Breakfast");

  const fetchRecipeData = useRecipeStore((state) => state.fetchRecipeData);
  const [query, setQuery] = useState("Breakfast");

  useEffect(() => {
    try {
      fetchRecipeData(query)
    } catch (error) {
      console.log(error);
    }
  }, [query]);



  
  // console.log(recipeData);
  // console.log("this is  from RecipeAPI.MEALS ", recipeData.meals);
  return (
    <>
      <div>
        <input
          type="search"
          placeholder="Search for Recipes"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </>
  );
}

export default RecipeAPI;
