import { useState, useEffect } from "react";

import { Text } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

//
function PageTitles({
  titleScale,
  titlePosition,
  titleString,
  titleColor,
  ...props
}) {
  const { width } = useThree((state) => state.viewport);
  const { height } = useThree((state) => state.viewport);
  return (
    <>
      <mesh
        // rotation={[0, 0, 1.6]}
        {...props}
      >
        <Text
          // color={"#346751"}
          color={titleColor}
          fontSize={width * 0.005 && height * 0.009}
          lineHeight={0.8}
          scale={titleScale}
          position={titlePosition}
        >
          {titleString}
        </Text>
      </mesh>
    </>
  );
}

export default PageTitles;
