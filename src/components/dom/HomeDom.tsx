//@ts-nocheck
import React, { useState, useMemo, useEffect } from "react";
import styled from "styled-components";
import { useSpring, useTrail, a } from "@react-spring/web";
import InfiniteSlider from "./Slider";
// import items from "./items";
// import "./styles.css";
import { useRecipeStore } from "@/helpers/store";
import { ConfigResolverMap } from "@use-gesture/react";

// const recipeData = useRecipeStore((state) => state.recipeData);

const recipeItemsArray = [
  {
    css: "https://www.themealdb.com/images/ingredients/Lime.png",
    height: 150,
  },
  {
    css: "https://www.themealdb.com/images/media/meals/1550441882.jpg",
    height: 300,
  },
  {
    css: "https://www.themealdb.com/images/media/meals/1543774956.jpg",
    height: 300,
  },
  {
    css: "https://www.themealdb.com/images/media/meals/1550441882.jpg",
    height: 300,
  },
  {
    css: "https://www.themealdb.com/images/ingredients/Lime.png",
    height: 300,
  },
  {
    css: "https://www.themealdb.com/images/media/meals/mlchx21564916997.jpg",
    height: 300,
  },
  {
    css: "https://www.themealdb.com/images/ingredients/Lime.png",
    height: 200,
  },
  {
    css: "https://www.themealdb.com/images/media/meals/58oia61564916529.jpg",
    height: 300,
  },
];

console.log("this is the recipeItemsArray", recipeItemsArray);

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

//
// End of Styled conponents ---------
//
function Trail({ text, visible }) {
  const words = useMemo(() => text.split(" "), [text]);
  const trail = useTrail(words.length, {
    opacity: visible ? 1 : 0,
    x: visible ? 0 : 20,
    height: visible ? 90 : 0,
    from: { opacity: 0.1, x: 20, height: 0 },
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
//
//
//
// -----------------
const Cover = styled(a.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: black;
`;
//
//
//
// -----------
/* prettier-ignore */
const ImageItem = ({ item, index }) => {
  const recipeData = useRecipeStore((state) => state.recipeData);
  const recipeFoodName = [recipeData.meals.map((meals: any) => meals.strMeal)].toString(); 
  //  console.log("this is the RecipeFoodImage$$$", recipeFoodImage);
// console.log(recipeFoodName)


// console.log(recipeFoodName.toString())

// console.log(recipeFoodName[0].toString())

  const [hovered, setHover] = useState(false);
  const { opacity, scale } = useSpring({opacity: hovered ? 0.4 : 0,scale: hovered ? 0.95 : 1});
  const transform = scale.to((s) => `scale(${s})`);
  return (
    <Content>
      <Marker>{String(index).padStart(2, "0")}</Marker>
      <Image
        // style={{ transform, backgroundImage: `url(${item})`}}
        style={{ transform, backgroundImage: `url(${item.strMealThumb})` }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Cover style={{ opacity }} />
      </Image>

      {/* urls: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 5, 7, 8, 2, 4, 9, 6].map((u) => `/${u}.jpeg`) */}

      <Trail text={item.strMeal} visible={hovered} />
    </Content>
  );
};

// ----------------------------------------------------

//
//
//
//
// ##########

// const [query, setQuery] = useState([]);
/* prettier-ignore */
function HomeDom() {
  const recipeData = useRecipeStore((state) => state.recipeData);
  const recipeFoodName = [recipeData.meals.map((meals: any) => meals.strMeal)].toString(); 
  const recipeFoodImage = [recipeData.meals.map((meals: any) => meals.strMealThumb)].toString();
   const imageLinks = useMemo(() => recipeFoodImage.split(","));
   

  // for (let index = 0; index < recipeData.meals.length; index++) {
  //   const element = recipeData.meals[index];
  //   console.log("these are the elements", element);
  // }
  // const recipeFoodName = [recipeData.meals.map((meals: any) => meals.strMeal)]; 
  // const recipeFoodImage = [recipeData.meals.map((meals: any) => meals.strMealThumb)];
// 
 
// console.log("This is the RecipeData from HomeDOM", recipeData)
console.log("This is the RecipeData.meals from HomeDOM", recipeData.meals)
  
  return (
    <>
      {/* <p>main page</p> */}
      {/* <ul>
        {recipeData.meals.map((item) => {
          return (
            <li key={item.idMeal}>
              <div>
                <p>{item.strMeal}</p>
                <img
                  alt={`${item.strMealThumb} Food`}
                  src={`${item.strMealThumb}`}
                />
                <p>{item.strInstructions}</p>
              </div>

              <hr />
            </li>
          );
        })}
      </ul> */}
      <Main>
        <InfiniteSlider items={recipeData.meals} width={600} visible={3}>
        {/* <InfiniteSlider items={recipeItemsArray} width={600} visible={3}> */}
          {(item, index) => <ImageItem item={item} index={index} />}


        </InfiniteSlider>
        
      </Main>
    </>
  );
}

export default HomeDom;
