import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  useCursor,
  MeshReflectorMaterial,
  Image,
  Text,
  Environment,
} from "@react-three/drei";
// recipe search api

function SearchResults() {
  const [data, setData] = useState({ meals: [] });
  const [query, setQuery] = useState("Breakfast");
  useEffect(() => {
    const fetchData = () => {
      try {
        axios
          .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + query)
          .then((response) => {
            setData(response.data);
            console.log(response);
          });
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

    fetchData();
  }, [query]);
  return (
    <>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <ul>
        {data.meals === null ? (
          <p>
            Sorry, We don't Have that Recipe. Please try another Food or enter a
            valid Input
          </p>
        ) : (
          data.meals.map((item) => (
            <li key={item.idMeal}>
              <p>Food Name: {" " + item.strMeal}</p>
              <p>Instructions: {" " + item.strInstructions}</p>
              <p>Ingredients: {" " + item.strIngredient1}</p>

              {/* <Image url={item.strMealThumb} /> */}
              <img src={item.strMealThumb} alt="Logo" />
              {/* <a href={item.url}>{item.strInstructions}</a> */}
            </li>
          ))
        )}
      </ul>
    </>
  );
}

function RecipeListApi() {
  return (
    <>
      <SearchResults />
    </>
  );
}

export default RecipeListApi;
