//research profile page
import dynamic from "next/dynamic";
//
//
// Jyothis Research Details
const ResearchProfileDetails = dynamic(
  () => import("@/components/canvas/ResearchProfileDetails")
);
//
// DOM elements here
const DOM = () => {
  return <></>;
};
const R3F = () => {
  return (
    <>
        <ResearchProfileDetails />
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
      title: "Research",
    },
  };
}
