import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import useStore from "@/helpers/store";
// import Shader from '@/components/canvas/ShaderExample/ShaderExample'

// Prefer dynamic import for production builds
// But if you have issues and need to debug in local development
// comment these out and import above instead
// https://github.com/pmndrs/react-three-next/issues/49
// const Shader = dynamic(
//   () => import("@/components/canvas/ShaderExample/ShaderExample"),
//   {
//     ssr: false,
//   }
// );
//dynamic Imports
// const Home = dynamic(() => import("@/components/canvas/Home"), {
//   ssr: false,
// });
const TestingApi = dynamic(() => import("@/components/dom/TestingApi"));
const Home = dynamic(() => import("@/components/canvas/Home"));
const RecipeListApi = dynamic(
  () => import("@/components/service/RecipeListApi")
);

const ResApi = dynamic(() => import("@/components/canvas/ResApi"));

const HomeDom = dynamic(() => import("@/components/dom/HomeDom"));

// DOM elements here
const DOM = () => {
  return (
    <>
      <TestingApi />
      {/* <RecipeListApi /> */}
      {/* <HomeDom /> */}
    </>
  );
};

// Canvas/R3F components here
const R3F = () => {
  // Example of using the router to change pages
  // It can also be inside R3F component (see `two.tsx` and `Box.tsx`)
  // const { router } = useStore();
  // const handleOnClick = () => {
  // router.push("/researchProfile");
  // router.push("/two");
  // };

  return (
    <>
      {/* <ambientLight intensity={1} /> */}
      {/* <Shader onClick={handleOnClick} /> */}
      {/* <Home /> */}
      {/* <RecipeListApi /> */}
      {/* <ResApi /> */}
    </>
  );
};

export default function Page() {
  return (
    <>
      <DOM />
      <R3F />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "Recipes",
    },
  };
}
