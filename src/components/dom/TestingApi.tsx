// //@ts-nocheck
// import React, { useState, useEffect } from "react";
// import { getRecipe } from "@/helpers/store";

// //

// function TestingApi() {
//   const recipeData = getRecipe((state) => state.recipeData);
//   const setRecipeData = getRecipe((state) => state.setRecipeData);
//   const [query, setQuery] = useState("Breakfast");
//   useEffect(() => {
//     const recipeFromAPI = async () => {
//       try {
//         const recipeDataApi = await (
//           await fetch(
//             "https://www.themealdb.com/api/json/v1/1/search.php?s=" + query
//           )
//         ).json();
//         console.log("data from recipeData", recipeData);

//         setRecipeData(
//           recipeDataApi.meals.map((recData: any) => recData.strMeal)
//         );
//         console.log("data from recipeData", recipeData);
//       } catch (error) {
//         // Error 😨
//         if (error.response) {
//           /*
//            * The request was made and the server responded with a
//            * status code that falls out of the range of 2xx
//            */
//           console.log(error.response.data);
//           console.log(error.response.status);
//           console.log(error.response.headers);
//         } else if (error.request) {
//           /*
//            * The request was made but no response was received, `error.request`
//            * is an instance of XMLHttpRequest in the browser and an instance
//            * of http.ClientRequest in Node.js
//            */
//           console.log(error.request);
//         } else {
//           // Something happened in setting up the request and triggered an Error
//           console.log("Error", error.message);
//         }
//         console.log(error);
//       }
//     };
//     console.log("the first const data", recipeFromAPI);
//     recipeFromAPI();
//     // console.log("the data inside Recipe Data", recipeData);
//   }, [query]);
//   return (
//     <>
//       <div>
//         <input value={query} onChange={(e) => setQuery(e.target.value)} />
//         <h1>Food Names</h1>
//         <ul>
//           {recipeData.map((strMeal: any) => (
//             <li key={strMeal}>
//               <p>Food Name: {strMeal}</p>
//             </li>
//           ))}
//         </ul>
//         <p>new</p>
//         <ul>
//           {recipeData.map((idMeal: any) => (
//             <li key={idMeal}>
//               <p>Food Name: {idMeal}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }
// // console.log(data);

// // useEffect(() => {
// //   const recipeFromAPI = async () => {
// //     const recipeData = await (
// //       await fetch(
// //         "https://www.themealdb.com/api/json/v1/1/search.php?s=Breakfast"
// //       )
// //     ).json();
// //     console.log(recipeData);
// //     setRecipeData(recipeData);
// //   };

// //   recipeFromAPI();
// // }, []);

// //   return (
// //     <>
// //       <ul>
// //         {recipeData.meals.map((item) => (
// //           <li key={item.objectID}>
// //             <p>Meal Name {" " + item.strMeal}</p>

// //             {/* <a href={item.url}>{item.strInstructions}</a> */}
// //           </li>
// //         ))}
// //       </ul>
// //     </>
// //   );
// // }

// export default TestingApi;

// //   return (
// //     <>
// //       <ul>
// //         {data.meals.map((item) => (
// //           <li key={item.objectID}>
// //             <p>Meal Name {" " + item.strMeal}</p>

// //             {/* <a href={item.url}>{item.strInstructions}</a> */}
// //           </li>
// //         ))}
// //       </ul>
// //     </>
// //   );
// // }

// // export default TestingApi;

// // return (
// //   <>
// //     <div>
// //       <input value={query} onChange={(e) => setQuery(e.target.value)} />
// //       <h1>Food Names</h1>
// //       <ul>
// //         {recipeData.meals == null ? (
// //           <p>
// //             Sorry, We don't Have that Recipe. Please try another Food or enter
// //             a valid Input
// //           </p>
// //         ) : (
// //           recipeData.map((strMeal: any) => (
// //             <li key={strMeal}>
// //               <p>Food Name: {strMeal}</p>
// //             </li>
// //           ))
// //         )}
// //       </ul>
// //     </div>
// //   </>
// // );
// // }

// // return (
// //   <>
// //     <div>
// //       <input value={query} onChange={(e) => setQuery(e.target.value)} />
// //       <h1>Food Names</h1>
// //       <ul>
// //         {recipeData.map((strMeal: any) => (
// //           <li key={strMeal}>
// //             <p>Food Name: {strMeal}</p>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   </>
// // );
// // }
