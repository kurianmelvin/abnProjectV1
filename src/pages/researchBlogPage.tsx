// research Blog details page
import dynamic from "next/dynamic";
// //
// //
const ResearchBlogDetails = dynamic(
  () => import("@/components/canvas/ResearchBlogDetails")
);
// //
// DOM elements here
const DOM = () => {
  return <></>;
};
const R3F = () => {
  return (
    <>
      <ResearchBlogDetails />
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
      title: "Research Blog",
    },
  };
}
