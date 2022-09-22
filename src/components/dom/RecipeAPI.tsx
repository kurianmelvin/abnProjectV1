//@ts-nocheck
import React, { useState, useEffect } from "react";
import { useRecipeStore } from "@/helpers/store";

function RecipeAPI() {
  // const [searchTerm, setSearchTerm] = useState("Breakfast");
  const recipeData = useRecipeStore((state) => state.recipeData);
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
  return (
    <section>
      {/* <form
        onSubmit={(event) => {
          event.preventDefault();
          fetchRecipeData(searchTerm);
        }}
      >
        <label>
          Search for Recipe
          <input
            type="search"
            placeholder="search for book"
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </label>
        <button type="submit">Search</button>
      </form> */}
      <input value={query} onChange={(e) => setQuery(e.target.value)} />

      <ul>
        {recipeData.meals.map((item) => {
          return (
            <li key={item.idMeal}>
              <div>
                <p>{item.strMeal}</p>
                <img
                  alt={`${item.strMealThumb} Food`}
                  src={`${item.strMealThumb}`}
                />
                <p>{item.strInstructions}</p>
              </div>

              <hr />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default RecipeAPI;
