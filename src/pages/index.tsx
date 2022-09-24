import dynamic from "next/dynamic";

const HomeDom = dynamic(() => import("@/components/dom/HomeDom"));

const RecipeAPI = dynamic(() => import("@/helpers/RecipeAPI"));

// DOM elements here
const DOM = () => {
  return (
    <>
      <RecipeAPI />
      <HomeDom />
    </>
  );
};

// Canvas/R3F components here
const R3F = () => {
  // Example of using the router to change pages
  // It can also be inside R3F component (see `two.tsx` and `Box.tsx`)

  return <></>;
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
