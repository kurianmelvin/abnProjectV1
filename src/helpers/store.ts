//@ts-nocheck
import { Router } from "next/router";
import React, { useState, useEffect } from "react";
import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import axios from "axios";

export interface AppState {
  // NextJS router
  router: Router;
  setRouter: (router) => void;

  // Add any types for app-wide state here
  // e.g. game start logic, points/score, etc
  // gameStarted: boolean;
  // points: number;
}

export const useStore = create<AppState>()(
  devtools(
    // Optional persist
    // This saves Zustand state when you close browser
    // Good in some cases, but not in others, especially prototyping
    // persist(

    (set) => ({
      // We keep the NextJS router in state because it's undefined in most components
      router: null,
      setRouter: (router) => set((state) => ({ ...state, router })),

      // Add any default values for app-wide state here
      // e.g. game start logic, points/score, etc
      // gameStarted: true,
      // points: 100,
    })

    // END: Optional persist
    // )
  )
);

// export const getRecipe = create((set) => ({
//   recipeName: [],
//   recipeInstructions: [],
//   recipeImage: [],
//   recipeIngredient: [],
//   recipeMeasure: [],
//   recipeYoutube: [],

//   setRecipeName: (meals: any) => set({ recipeName: meals }),
//   setRecipeInstructions: (meals: any) => set({ recipeInstructions: meals }),
//   setRecipeImage: (meals: any) => set({ recipeImage: meals }),
//   setRecipeIngredient: (meals: any) => set({ recipeIngredient: meals }),
//   setRecipeMeasure: (meals: any) => set({ recipeMeasure: meals }),
//   setRecipeYoutube: (meals: any) => set({ recipeYoutube: meals }),
// }));

//--------
/*prettier-ignore*/
export const useRecipeStore = create((set) => {
  return {
    recipeName: [],
    recipeInstructions: [],
    recipeImage: [],
    recipeIngredient: [],
    recipeMeasure: [],
    recipeYoutube: [],
    recipeData: { meals: [] },
    fetchRecipeData: async (searchTerm) => {

      try {
        const result = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      set({ recipeData: result.data});
      } catch (error) {
        console.log(error.data);
        console.log(error.status);
        console.log(error.headers);
      }
      
      
    },
  };
});
// console.log("recipeData from the STORE -###-AFTER SET-###-", recipeData);

// export const restaurantsTransform = ({ results = [] }) => {
//   const mappedResults = results.map((restaurant) => {
//     // restaurant.photos = restaurant.photos.map((p) => {
//     //   return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
//     // });

//     return {
//       ...restaurant,
//       address: restaurant.vicinity,
//       isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
//       isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
//     };
//   });
// };

export default useStore;
