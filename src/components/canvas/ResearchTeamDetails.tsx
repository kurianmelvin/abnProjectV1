//research team details page
//@ts-nocheck
import React, { useRef, useState } from "react";

import { Html, ScrollControls, Scroll, useCursor } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

//end of imports
//

//start of functions
function Box({ text, color, ...props }) {
  const [hovered, setHover] = useState(false);
  useCursor(hovered);
  return (
    <mesh
      {...props}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
      <meshBasicMaterial color={hovered ? "hotpink" : color} />
      <Html position={[0, 0, 1]} className="label" center>
        {text}
      </Html>
    </mesh>
  );
}

// function ScrollContainer({ scroll, children }) {
//   const { viewport } = useThree();
//   const group = useRef();
//   useFrame((state, delta) => {
//     group.current.position.y = THREE.MathUtils.damp(
//       group.current.position.y,
//       viewport.height * scroll.current,
//       4,
//       delta
//     );
//     // Or: group.current.position.lerp(vec.set(0, viewport.height * scroll.current, 0), 0.1)
//   });
//   return <group ref={group}>{children}</group>;
// }

function Scene() {
  const viewport = useThree((state) => state.viewport);
  return (
    <>
      <Box text={<span>This is HTML</span>} color="aquamarine" />
      <Box
        text={<h1>H1 caption</h1>}
        color="lightblue"
        position={[0, -viewport.height, 0]}
      />
    </>
  );
}

//
//export function
function ResearchTeamDetails(props) {
  const scroll = useRef(0);
  return (
    <>
      <ScrollControls damping={3} pages={6}>
        <Scroll>
          <Scene />
        </Scroll>
      </ScrollControls>
    </>
  );
}

export default ResearchTeamDetails;
