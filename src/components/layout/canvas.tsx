import { useRef } from "react";

import { A11yAnnouncer } from "@react-three/a11y";
// import { OrbitControls, Preload, Stats } from "@react-three/drei";
import { Preload, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

// const Controls = () => {
//   const control = useRef(null);
//   return <OrbitControls ref={control} />;
// };
const CanvasWrapper = ({ children }) => {
  return (
    <>
      <Canvas
        // style={{ width: "100vw", height: "100vh" }}
        gl={{
          antialias: false,
          powerPreference: "high-performance",
          // logarithmicDepthBuffer: true,
          // depth: true,
          // stencil: true,
        }}
        // camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}
        camera={{ position: [0, 0, 5], fov: 100 }}
        dpr={[1, 2]}
      >
        {/* <Stats /> */}
        {/* <Controls /> */}
        <Preload all />
        {children}
      </Canvas>
      {/* <A11yAnnouncer /> */}
    </>
  );
};

export default CanvasWrapper;
