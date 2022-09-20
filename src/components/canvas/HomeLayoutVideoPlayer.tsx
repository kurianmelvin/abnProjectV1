import React, { Suspense, useMemo, useEffect, useRef, useState } from "react";

import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function HomeLayoutVideoPlayer({ videoName, ...props }) {
  const { height } = useThree((state) => state.viewport);
  const { width } = useThree((state) => state.viewport);

  // const size = useAspect(2, 1);
  const [video] = useState(() =>
    Object.assign(document.createElement("video"), {
      // src: "/statement.mp4",
      src: videoName,
      autoplay: true,
      crossOrigin: "Anonymous",
      preload: "auto",
      muted: true,
      loop: true,
    })
  );
  useEffect(() => void video.play(), [video]);
  return (
    <>
      <group {...props}>
        {/* <mesh position={[0, 0, -50]} scale={size}> */}
        <mesh position={[0, 0, 0]}>
          {/* <mesh position={[10, 0, -10]}> */}
          {/* <mesh position={[50, 0, -50]}> */}
          {/* <planeBufferGeometry /> */}

          <boxBufferGeometry
            attach="geometry"
            args={[width * 1, height * 3, 5]}
          />
          <meshBasicMaterial>
            <videoTexture
              attach="map"
              args={[video]}
              encoding={THREE.sRGBEncoding}
            />
          </meshBasicMaterial>
        </mesh>
      </group>
    </>
  );
}

export default HomeLayoutVideoPlayer;
