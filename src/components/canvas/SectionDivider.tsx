import React from "react";

import * as THREE from "three";

function SectionDivider({ ...props }) {
  return (
    <>
      <ambientLight intensity={1} />

      <mesh {...props}>
        <planeBufferGeometry args={[100, 5]} />
        <meshStandardMaterial color={"white"} />
      </mesh>
    </>
  );
}

export default SectionDivider;
