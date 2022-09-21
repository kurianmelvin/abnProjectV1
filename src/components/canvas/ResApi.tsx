//@ts-nocheck
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  useCursor,
  MeshReflectorMaterial,
  Image,
  Text,
  useTexture,
  Environment,
} from "@react-three/drei";
// recipe search api

function SearchResultsAPI({ ...args }) {
  const [data, setData] = useState({ meals: [] });
  const [query, setQuery] = useState("Breakfast");

  useEffect(() => {
    const fetchData = () => {
      try {
        axios
          .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + query)
          .then((response) => {
            setData(response.data);
            // console.log(response);
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
  for (let i = 0; i < data.meals.length; i++) {
    console.log("printing data items", data.meals[i].strMeal);
  }
  // console.log(typeof data);

  // console.log("this is data: ", data.meals);
  const texture = useTexture(
    "https://www.themealdb.com/images/media/meals/naqyel1608588563.jpg"
  );
  // const texture2 = useTexture(
  //   "https://www.themealdb.com/images/ingredients/Lime-Small.png"
  // );

  return (
    <>
      <Image
        texture={texture}
        scale={[4, 4, 1]}
        position={[-2, -2, -1.5]}
        {...args}
      />

      {/* <Image
        texture={texture2}
        scale={[4, 4, 1]}
        position={[2, 2, -1]}
        {...args}
      /> */}
    </>
  );
}

function ResApi() {
  return (
    <>
      <SearchResultsAPI />
    </>
  );
}

export default ResApi;

{
  /* <input value={query} onChange={(e) => setQuery(e.target.value)} />
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
              <p>Ingredients: {" " + item.strIngredient1}</p> */
}

{
  /* <Image url={item.strMealThumb} /> */
}
{
  /* <img src={item.strMealThumb} alt="Logo" /> */
}
{
  /* <a href={item.url}>{item.strInstructions}</a> */
}
{
  /* </li>
          ))
        )}
      </ul> */
}
