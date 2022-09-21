//@ts-nocheck
import React, { useState, useMemo } from "react";
import styled from "styled-components";
import { useSpring, useTrail, a } from "@react-spring/web";
import InfiniteSlider from "./Slider";
// import items from "./items";
// import "./styles.css";

const items = [
  {
    css: "url(https://www.themealdb.com/images/ingredients/Lime.png)",
    height: 150,
  },
  {
    css: "url(https://www.themealdb.com/images/ingredients/Lime.png)",
    height: 300,
  },
  {
    css: "url(https://www.themealdb.com/images/ingredients/Lime.png)",
    height: 300,
  },
  {
    css: "url(https://www.themealdb.com/images/ingredients/Lime.png)",
    height: 300,
  },
  {
    css: "url(https://www.themealdb.com/images/ingredients/Lime.png)",
    height: 300,
  },
  {
    css: "url(https://www.themealdb.com/images/ingredients/Lime.png)",
    height: 300,
  },
  {
    css: "url(https://www.themealdb.com/images/ingredients/Lime.png)",
    height: 200,
  },
  {
    css: "url(https://www.themealdb.com/images/ingredients/Lime.png)",
    height: 300,
  },
];

const Main = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
`;

const Marker = styled.span`
  color: white;
  position: absolute;
  top: 0px;
  left: 140px;
  font-family: monospace;
`;

const Image = styled(a.div)`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
`;

const Container = styled.div`
  position: absolute;
  top: 100px;
  left: 0px;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`;

const Text = styled(a.div)`
  height: 90px;
  line-height: 90px;
  color: transparent;
  font-size: 7em;
  font-weight: 600;
  will-change: transform, opacity;
  overflow: hidden;
  -webkit-text-stroke: 2px white;
  & > div {
    overflow: hidden;
  }
`;

function Trail({ text, visible }) {
  const words = useMemo(() => text.split(" "), [text]);
  const trail = useTrail(words.length, {
    opacity: visible ? 1 : 0,
    x: visible ? 0 : 20,
    height: visible ? 90 : 0,
    from: { opacity: 0, x: 20, height: 0 },
    config: { tension: 2500, friction: 200 },
  });

  return (
    <Container>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <Text
            key={words[index]}
            style={{
              ...rest,
              transform: x.to((x) => `translate3d(0,${x}px,0)`),
            }}
          >
            <a.div style={{ height }}>{words[index]}</a.div>
          </Text>
        ))}
      </div>
    </Container>
  );
}

const Cover = styled(a.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: black;
`;

const Item = ({ item, index }) => {
  const [hovered, setHover] = useState(false);
  const { opacity, scale } = useSpring({
    opacity: hovered ? 0.4 : 0,
    scale: hovered ? 0.95 : 1,
  });
  const transform = scale.to((s) => `scale(${s})`);
  return (
    <Content>
      <Marker>{String(index).padStart(2, "0")}</Marker>
      <Image
        style={{ transform, backgroundImage: item.css }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Cover style={{ opacity }} />
      </Image>
      <Trail text="hello world" visible={hovered} />
    </Content>
  );
};

function HomeDom() {
  return (
    <>
      <p>main page</p>

      <Main>
        <InfiniteSlider items={items} width={600} visible={3}>
          {(item, index) => <Item item={item} index={index} />}
        </InfiniteSlider>
      </Main>
    </>
  );
}

export default HomeDom;
