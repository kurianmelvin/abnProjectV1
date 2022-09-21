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

export const getRecipe = create((set) => ({
  recipeData: [],
  setRecipeData: (meals: any) => set({ recipeData: meals }),
}));

export default useStore;

// export const getRecipe = create((set) => ({
//   data: [],
//   loading: false,
//   hasErrors: false,
//   fetch: async () => {
//     set(() => ({ loading: true }));
//     try {
//       const response = await axios.get(
//         "https://www.themealdb.com/api/json/v1/1/search.php?s=Breakfast"
//       );
//       set((state) => ({ data: (state.data = response.data), loading: false }));
//     } catch (err) {
//       set(() => ({ hasErrors: true, loading: false }));
//     }
//   },
// }));
// export const getRecipe = create((set) => ({
//   data: { meals: [] },
//   query: "Breakfast",

//   getMoreData: async () => {
//     const response = await axios.get(
//       "https://www.themealdb.com/api/json/v1/1/search.php?s=Breakfast"
//     );

//     set((state) => ({ data: response.data }));
//   },
// }));
// export const getRecipe = create((set) => ({
//   recipeData: [],
//   setRecipeData: (meals: any) => set({ ...meals }),
// }));
