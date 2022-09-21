//@ts-nocheck
import React, { useState, useEffect } from "react";
import { getRecipe } from "@/helpers/store";

/* prettier-ignore */
function TestingApi() {
  const recipeName = getRecipe((state) => state.recipeName);
  const recipeInstructions = getRecipe((state) => state.recipeInstructions);
  const recipeImage = getRecipe((state) => state.recipeImage);
  const recipeIngredient = getRecipe((state) => state.recipeIngredient);
  const recipeMeasure = getRecipe((state) => state.recipeMeasure);
  const recipeYoutube = getRecipe((state) => state.recipeYoutube);

  const setRecipeName = getRecipe((state) => state.setRecipeName);
  const setRecipeInstructions = getRecipe((state) => state.setRecipeInstructions);
  const setRecipeImage = getRecipe((state) => state.setRecipeImage);
  const setRecipeIngredient = getRecipe((state) => state.setRecipeIngredient);
  const setRecipeMeasure = getRecipe((state) => state.setRecipeMeasure);
  const setRecipeYoutube = getRecipe((state) => state.setRecipeYoutube);
  const [query, setQuery] = useState("Breakfast");
  useEffect(() => {
    const recipeFromAPI = async () => {
      try {
        const recipeDataApi = await (
          await fetch(
            "https://www.themealdb.com/api/json/v1/1/search.php?s=" + query
          )
        ).json();


        setRecipeName(recipeDataApi.meals.map((recData: any) => recData.strMeal));
        setRecipeInstructions(recipeDataApi.meals.map((recData: any) => recData.strInstructions));
        setRecipeImage(recipeDataApi.meals.map((recData: any) => recData.strMealThumb));
        setRecipeIngredient(recipeDataApi.meals.map((recData: any) => recData.strIngredient1));
        setRecipeMeasure(recipeDataApi.meals.map((recData: any) => recData.strMeasure1));
        setRecipeYoutube(recipeDataApi.meals.map((recData: any) => recData.strYoutube));
        

      } catch (error) {
        // Error 😨
        if (error.response) {
          /*
           * The request was made and the server responded with a
           * status code that falls out of the range of 2xx
           */
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          /*
           * The request was made but no response was received, `error.request`
           * is an instance of XMLHttpRequest in the browser and an instance
           * of http.ClientRequest in Node.js
           */
          console.log(error.request);
        } else {
          // Something happened in setting up the request and triggered an Error
          console.log("Error", error.message);
        }
        console.log(error);
      }
    };
    
    recipeFromAPI();
    
  }, [query]);
  
    console.log("$$$$$$$$$$$$$Namea", recipeName);
    console.log("######Instructions", recipeInstructions);
  return (
    <>
      <div>
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
        <h1>Food Names</h1>
        <ul>
          {recipeName.map((strMeal: any) => (
            <li key={strMeal}>
              <p>Food Name: {strMeal}</p>
            </li>
          ))}
        </ul>
        <p>new</p>
        <ul>
          {recipeInstructions.map((strInstructions: any) => (
            <li key={strInstructions}>
              <p>Instructions: {strInstructions}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TestingApi;
