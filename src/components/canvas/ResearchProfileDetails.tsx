// second page
//@ts-nocheck
import React, { useLayoutEffect, useRef } from "react";

import { useIntersect, Image, ScrollControls, Scroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

import useStore from "@/helpers/store";

import PageTitles from "./PageTitles";
import SectionDivider from "./SectionDivider";
//

//
/* prettier-ignore */
const posX = 0
const posY = 0;
const posZ = 0;

const reduceSize = 0.2;

function Item({ url, scale, ...props }) {
  const visible = useRef(false);
  const intersectReference = useIntersect(
    (isVisible) => (visible.current = isVisible)
  );
  const { height } = useThree((state) => state.viewport);

  useFrame((state, delta) => {
    intersectReference.current.position.y = 
    THREE.MathUtils.damp(intersectReference.current.position.y, visible.current ? 0 : -height / 3, 4, delta); /* prettier-ignore */

    intersectReference.current.material.zoom =  
    THREE.MathUtils.damp(intersectReference.current.material.zoom,visible.current ? 1 : 1.5, 4, delta ); /* prettier-ignore */
  });
  return (
    <group {...props}>
      <Image ref={intersectReference} scale={scale} url={url} alt={""} />
    </group>
  );
}
//

function Items() {
  const { width: w, height: h } = useThree((state) => state.viewport);
  return (
    <Scroll>
      {/* Jyothis profile and info about him */}
      <group>
        <PageTitles
          // rotation={[0, 0, 1.58]}
          titleString="Jyothis James"
          titleColor={"#000000"}
          titleScale={[w * 0.7, h * 1, 0.1]}
          titlePosition={[w * 0.17, h * 0.1, posZ]}
        />
        <PageTitles
          // rotation={[0, 0, 1.58]}
          titleString=" Texas A&M University, Department of Philosophy, Graduate Student"
          titleColor={"#000000"}
          titleScale={[w * 0.65 * reduceSize, h * 1 * reduceSize, 0.1]}
          titlePosition={[w * 0.2, h * 0.048, posZ]}
        />
      </group>
      <Item
        url="/JyothisPhoto.jpg"
        scale={[w / 3, w / 3, 1]}
        position={[-w * 0.28, 1, posZ]}
      />
      <SectionDivider rotation={[1, 0, 0]} position={[-w / 6, -4, posZ]} />
      {/* ---------------------------------------------------------------------------------------- */}
      {/* Research topic one */}
      <group>
        <PageTitles
          // rotation={[0, 0, 1.58]}
          titleString="Environmental Politics and Aesthetics."
          titleColor={"#000000"}
          titleScale={[w * 0.3, h * 0.6, 1]}
          // titlePosition={[0, -6.5, 0]}
          titlePosition={[w * 0, -h * 0.55, posZ]}
        />
        <PageTitles
          // rotation={[0, 0, 1.58]}
          titleString={"What will happen to our beautiful Earth?"}
          titleColor={"#094D2C"}
          titleScale={[w * 0.3 * 0.5, h * 0.6 * 0.5, 1]}
          titlePosition={[-w * 0.3, -h * 0.66, posZ]}
        />

        <Item
          url="/plastic.jpg"
          // scale={[w * 0.1, h, 1]}
          scale={[w * 0.5, h * 0.69, 1]}
          position={[w * 0.22, -h * 1, 0]}
        />
      </group>

      {/* ------------------------ */}
      {/* ------------------------ */}
      {/* ------------------------ */}
      <group position={[0, -5, 0]}>
        {/* ----------------------------- */}
        <Item
          url="/3d4.jpg"
          scale={[w / 5, w / 5, 1]}
          position={[w / 4, -h * 2, posZ]}
        />
        <Item
          url="/3d2.jpg"
          scale={[2, w / 3, 1]}
          position={[w / 30, -h * 2, posZ]}
        />

        <SectionDivider
          rotation={[1, 0, 0]}
          position={[w / 4, -h * 1.5, posZ]}
        />

        {/* ----------------------------------------------------------------------------------------- */}
        {/* Research topic Two */}
        <group>
          <Item
            url="/3d5.jpg"
            scale={[w / 5, w / 5, 1]}
            position={[w / 10, -h * 1.75, posZ]}
          />
          <Item
            url="/3d6.jpg"
            scale={[w / 3, w / 3, 1]}
            position={[-w / 4, -h * 2, posZ]}
          />
        </group>
        {/* Research topic three  */}
        <group>
          <Item
            url="/3d7.jpg"
            scale={[w / 3, w / 5, 1]}
            position={[-w / 4, -h * 2.6, posZ]}
          />
          <Item
            url="/3d8.jpg"
            scale={[w / 2, w / 2, 1]}
            position={[w / 4, -h * 3.1, posZ]}
          />
        </group>

        {/* Research Topic four */}
        <group>
          <Item
            url="/3d12.jpg"
            scale={[w / 2.5, w / 2, 1]}
            position={[-w / 6, -h * 4.1, posZ]}
          />
        </group>
      </group>
    </Scroll>
  );
}
//
function ResearchProfileDetails() {
  return (
    <>
      {/* <ScrollControls damping={2} pages={6} infinite={true}> */}
      {/* <ScrollControls damping={2} pages={5} horizontal={true}> */}
      <ScrollControls damping={2} pages={6}>
        <Items />

        {/* <Scroll html style={{ width: "100%" }}>
          <h1
            style={{
              position: "absolute",
              top: `50vh`,
              right: "15vw",
              fontSize: "4em",
              transform: `translate3d(0,-100%,0)`,
            }}
          >
            Jyothis James
          </h1>
          <h1
            style={{
              position: "absolute",
              top: `60vh`,
              right: "10vw",
              fontSize: "1.5em",
              transform: `translate3d(0,-100%,0)`,
            }}
          >
            Texas A&M University, Department of Philosophy, Graduate Student
          </h1>
          <h1 style={{ position: "absolute", top: "180vh", left: "10vw" }}>
            hail
          </h1>
          <h1 style={{ position: "absolute", top: "260vh", right: "10vw" }}>
            thee,
          </h1>
          <h1 style={{ position: "absolute", top: "350vh", left: "10vw" }}>
            thoth
          </h1>
          <h1 style={{ position: "absolute", top: "450vh", right: "10vw" }}>
            her
            <br />
            mes.
          </h1>
        </Scroll> */}
      </ScrollControls>
    </>
  );
}

export default ResearchProfileDetails;
