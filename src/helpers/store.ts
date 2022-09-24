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
     
      
    })

    // END: Optional persist
    // )
  )
);


//--------

export const useRecipeStore = create((set) => {
  return {

    recipeData: { meals: [] },
    fetchRecipeData: async (searchTerm) => {
      try {
        const result = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );
        set({ recipeData: result.data });
      } catch (error) {
        console.log(error.data);
        console.log(error.status);
        console.log(error.headers);
      }
    },
  };
});


export default useStore;
