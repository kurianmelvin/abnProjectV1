import React, { useLayoutEffect, useRef } from "react";

import {
  ScrollControls,
  Scroll,
  PerspectiveCamera,
  Text,
} from "@react-three/drei";
import { useLoader, MeshProps, useThree } from "@react-three/fiber";
import dynamic from "next/dynamic";
import { TextureLoader, BackSide } from "three";

import useStore from "@/helpers/store";
//dynamic imports client side loading
// const Profile = dynamic(
//   () => import("@/components/canvas/Profile"),
//   {
//     ssr: false,
//   }
// );
// // ResearchBlog
// const ResearchBlog = dynamic(() => import("@/components/canvas/ResearchBlog"), {
//   ssr: false,
// });
// //ResearchTeam
// const ResearchTeam = dynamic(() => import("@/components/canvas/ResearchTeam"), {
//   ssr: false,
// });
//
//dynamic imports Server side Loading
const ResearchProfile = dynamic(() => import("@/components/canvas/ResearchProfile")); /* prettier-ignore */
// ResearchBlog
const ResearchBlog = dynamic(() => import("@/components/canvas/ResearchBlog")); /* prettier-ignore */
//ResearchTeam
const ResearchTeam = dynamic(() => import("@/components/canvas/ResearchTeam")); /* prettier-ignore */
//
//  Research Details
// const ResearchProfileDetails = dynamic(
//   () => import("@/components/canvas/ResearchProfileDetails")
// );
//
//--------import End----------//
//

// HomeLayout Function -> this function displays all three topics
// The Blog, Research, Team
function HomeLayout() {
  // const aboutBackgroundImage = useLoader(TextureLoader, "./3d11.jpg");
  // const ref = useRef();
  return (
    <>
      {/* <ambientLight intensity={1} /> */}
      {/* <PerspectiveCamera makeDefault position={[0, 0, 50]}> */}
      {/* <ScrollControls damping={3} pages={6} infinite={true} horizontal={true}> */}
      <ScrollControls
        damping={2}
        pages={4}
        infinite={true}
        horizontal={true}
        distance={2.3}
      >
        <Scroll>
          {/* left */}
          <ResearchBlog position={[-5, 0, -16]} />
          {/* middle */}
          <ResearchProfile position={[30, 0, -16]} />

          {/* right */}
          <ResearchTeam position={[65, 0, -16]} />
        </Scroll>
      </ScrollControls>
      {/* </PerspectiveCamera> */}
    </>
  );
}

// type HomeProps = Partial<MeshProps> & {
//   onClick: () => void;
// };

function Home() {
  return (
    <>
      <HomeLayout />
      {/* <ResearchProfileDetails /> */}
    </>
  );
}

export default Home;
