// goes in the landing / home page
import { useState, useEffect, useRef } from "react";

import { Text, useCursor } from "@react-three/drei";
import { MeshProps, GroupProps } from "@react-three/fiber";
import dynamic from "next/dynamic";

import useStore from "@/helpers/store";
// import * as THREE from "three";
//dynamic imports
// const HomeLayoutVideoPlayer = dynamic(
//   () => import("@/components/canvas/HomeLayoutVideoPlayer"),
//   {
//     suspense: true,
//   }
// );

const HomeLayoutVideoPlayer = dynamic(
  () => import("@/components/canvas/HomeLayoutVideoPlayer")
);

//PageTitles
const PageTitles = dynamic(() => import("@/components/canvas/PageTitles"));
//
//

type ResearchTeamProps = Partial<GroupProps>;
function ResearchTeam(props: ResearchTeamProps) {
  const router = useStore((state) => state.router);
  const groupRef = useRef(null);
  const [hovered, setHover] = useState(false);
  useCursor(hovered);
  return (
    <>
      <group
        ref={groupRef}
        // scale={hovered ? 0.8 : 1}
        scale={1}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}
        {...props}
        onClick={() => router.push("/researchTeamPage")}
      >
        {/* <Suspense fallback={<div>Loading...</div>}></Suspense> */}
        <PageTitles
          rotation={[0, 0, 1.58]}
          titleString="Team"
          titleColor={"#A2E4B8"}
          titleScale={[50, 50, 1]}
          titlePosition={[0, 15, 3]}
        />
        <HomeLayoutVideoPlayer videoName={"/researchTeam.mp4"} />
      </group>
    </>
  );
}

export default ResearchTeam;
