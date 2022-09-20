// // //research Team Details page
import dynamic from "next/dynamic";
// // //
// // //
// // Research Bolg Details Page
const ResearchTeamDetails = dynamic(
  () => import("@/components/canvas/ResearchTeamDetails")
);
// // //
// DOM elements here
const DOM = () => {
  return <></>;
};
const R3F = () => {
  return (
    <>
      <ResearchTeamDetails />
      {/* // */}
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
      title: "Research Team",
    },
  };
}
