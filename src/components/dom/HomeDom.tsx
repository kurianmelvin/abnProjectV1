//@ts-nocheck
import React, { useState, useMemo, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { useSpring, useTrail, a } from "@react-spring/web";
import InfiniteSlider from "./Slider";
import { useRecipeStore } from "@/helpers/store";

const Main = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;

  //  top | right | bottom | left
  padding: 10% 10% 20% 10%;
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

const Para = styled.p`
  color: gold;
  font-size: smaller;
`;
const Li = styled.li`
  color: gold;
  font-size: smaller;
`;

const H1 = styled.h2`
  color: gold;
  padding: 0px;
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

const Image = styled(a.div)`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-size: cover;
  background-position: center center;
  margin-top 2em;
  margin-bottom 2em;
`;

const Cover = styled(a.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  border-radius: 15px;
  top: 0;
  background: black;
  //  top | right | bottom | left
  // margin: 10% 10% 20% 10%;
`;
const Marker = styled.span`
  color: gold;
  position: absolute;
  top: 0px;
  left: 140px;
  font-family: monospace;
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
//
//
//
// -----------------
// --------------------------------------------------------------------------------------------------------------

// function TestAppObj() {
//   const employee = {
//     strIngredient: "akeyfoo",
//     strIngredient1: "akeyfoo",
//     strIngredient2: "akeysdfs",
//     strIngredient3: "akeydfdfs",
//     strIngredient4: "akeybsdfar",
//     fdsfe: "basdfsr",
//     algs: "bsdfar",
//     strMeasure1: "1 pound",
//     strMeasure2: "1/4 cup",
//     strMeasure3: "3 cloves",
//     strMeasure4: "1 tin ",
//     strMeasure5: "1/2 teaspoon",
//     strMeasure6: "1/2 teaspoon",
//     Address_Line1: "XXX",
//     Address_Line2: "YYY",
//     Name: "ZZZ",
//   };

//   // console.log("###EMPLOYEE OBJECT", employee);

//   // const empKeyText = Object.keys(employee).toString();
//   // const matchIngredient = empKeyText.match(/strIngredient[\w-]/g);
//   // const matchMeasure = empKeyText.match(/strMeasure[\w-]/g);

//   // console.log("matchMeasure", matchMeasure);
//   // // console.log("employee[matchAddress]", employee[matchAddress[0]]);

//   // for (let index = 0; index < matchIngredient.length; index++) {
//   //   console.log(employee[matchIngredient[index]]);
//   // }

//   // for (let index = 0; index < matchMeasure.length; index++) {
//   //   console.log(employee[matchMeasure[index]]);
//   // }
// }
// --------------------------------------------------------------------------------------------------------------

const ImageItem = ({ item, indexd }) => {
  // const [flipped, set] = useState(false);
  // const recipeData = useRecipeStore((state) => state.recipeData);
  const [hovered, setHover] = useState(false);
  const { opacity, scale } = useSpring({
    opacity: hovered ? 0.4 : 0,
    scale: hovered ? 0.95 : 1,
  });
  const [clicked, setClicked] = useState(false);
  const transform = scale.to((s) => `scale(${s})`);
  let itemIng = new Object(item);

  // const recipeKeyText = Object.keys(item).toString();
  const recipeKeyText = Object.keys(itemIng).toString();

  const matchIngredient = recipeKeyText.match(/strIngredient[\w-]/g);
  // const matchIngredientValue =
  const matchMeasure = recipeKeyText.match(/strMeasure[\w-]/g);
  const itemsIdontWant = /\W+/g | /"   "/g | /  null/g;
  const itemsIdontWant2 = null;

  Object.keys(itemIng).map((key) =>
    itemIng[key] == (/\W+/g | /"   "/g | /  null/g && itemIng[key] == undefined)
      ? delete itemIng[key]
      : itemIng[key]
  );

  let ingAsdf = [];
  let meaAsdf = [];
  // let allItems = new Object();
  for (let index = 0; index < matchIngredient.length; index++) {
    ingAsdf[index] = [itemIng[matchIngredient[index]]];
  }

  for (let indexj = 0; indexj < matchMeasure.length; indexj++) {
    meaAsdf[indexj] = [itemIng[matchMeasure[indexj]]];
  }

  var armixed = ingAsdf.map(function (x, i) {
    return [x, meaAsdf[i]];
  });
  console.log(armixed);
  // const combineArrays = (first, second) => {
  //   return first.reduce((acc, val, ind) => {
  //     acc[val] = second[ind];
  //     return acc;
  //   }, {});
  // };
  // console.log(combineArrays(ingAsdf, meaAsdf));
  // for (let i = 0; i < ingAsdf; i++) {
  //   allItems[i] = ingAsdf[i];

  //   for (let j = 0; j < meaAsdf; j++) {
  //     allItems[i][j] = meaAsdf[j];
  //   }
  // }

  // console.log("Ingredient", ingAsdf);
  // console.log("measurements", meaAsdf);

  // console.log(allItems);
  // for (let indexj = 0; indexj < matchMeasure.length; indexj++) {
  //   asdf.push([]);
  // }
  // console.log("asdf", asdf);
  // const nameList = itemIng.map((name) => <li>{name}</li>);
  // console.log("item");

  // console.log("itemING", recipeKeyText);
  // console.log("111111111111111111111111111111111111");

  // for (const [key, value] of Object.entries(itemIng)) {
  //   if (value != (/\W+/g | /"   "/g | /  null/g) && value !== null) {
  //     delete itemIng.itemsIdontWant;
  //     // console.log("itemIMG inside if ", itemIng);
  //     // console.log(`${key}: ${value}`);
  //   }
  // }
  // console.log("$$$", item);
  // console.log("2222222", itemIng);

  // [matchIngredient]
  // console.log(item);

  // if (itemIng) {
  //   console.log(itemIng);
  // for (let indx = 0; indx < itemIng.length; indx++) {
  //   console.log("item[indx]", itemIng[indx]);
  // }
  // }

  // for (let index = 0; index < matchIngredient.length; index++) {
  //   itemIng.push(item[matchIngredient[index]]);
  //   // console.log("item[matchIngredient[index]]", item[matchIngredient[index]]);
  //   // console.log("item[matchIngredient[index]]", item[matchIngredient[index]]);
  // }
  // console.log("itemIng", itemIng);

  // console.log("@@@ImageItem", item);

  return (
    <>
      <Content onClick={() => setClicked((state) => !state)}>
        {/* <Para>{`${ingAsdf} : ${meaAsdf}`}</Para> */}
        {/* <Para>{combineArrays}</Para> */}
        {/* <Li>{`${armixed}`}</Li> */}

        {clicked ? (
          <>
            <H1>Ingredients and Measurements</H1>
          </>
        ) : null}

        {clicked
          ? armixed.map((combineItem, index) => (
              <dev key={(combineItem, index - 1)}>
                <Li>{` ${combineItem}`}</Li>
              </dev>
            ))
          : null}

        {/* 00000000 */}
        {clicked ? (
          <>
            <H1>Instructions</H1>
            <Para>{itemIng.strInstructions}</Para>
          </>
        ) : null}
        <Image
          // style={{ transform, backgroundImage: `url(${item})`}}
          style={{ transform, backgroundImage: `url(${itemIng.strMealThumb})` }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <Cover style={{ opacity }} />
        </Image>
        <Trail text={itemIng.strMeal} visible={hovered} />
      </Content>
    </>
  );
};

// ----------------------------------------------------

//
//
//
//
// ##########

// const [query, setQuery] = useState([]);
function HomeDom() {
  const recipeData = useRecipeStore((state) => state.recipeData);

  if (recipeData.meals === null) {
    recipeData.meals = [
      {
        strMeal: "Sorry, We don't have the Recipe.",
        strMealThumb: "https://i.ytimg.com/vi/u8_ICkj9l9M/maxresdefault.jpg",
      },
      {
        strMeal: "Sorry, We don't have the Recipe.",
        strMealThumb: "https://i.ytimg.com/vi/u8_ICkj9l9M/maxresdefault.jpg",
      },
      {
        strMeal: "Sorry, We don't have the Recipe.",
        strMealThumb: "https://i.ytimg.com/vi/u8_ICkj9l9M/maxresdefault.jpg",
      },
      {
        strMeal: "Sorry, We don't have the Recipe.",
        strMealThumb: "https://i.ytimg.com/vi/u8_ICkj9l9M/maxresdefault.jpg",
      },
    ];
    console.log("@@@the object is empty", recipeData.meals);
  }

  console.log("This is the RecipeData.meals from HomeDOM", recipeData.meals);

  return (
    <>
      <Main>
        <InfiniteSlider items={recipeData.meals} width={700} visible={4}>
          {(item, index) => <ImageItem item={item} index={index} />}
        </InfiniteSlider>
        {/* <Card/> */}
        {/* <TestAppObj /> */}
      </Main>
    </>
  );
}

export default HomeDom;

{
  /* {clicked ? (
            <>
              <H1>Ingredients and Measurements</H1>
              <Para>
                {item.strIngredient1} {item.strMeasure1}
              </Para>
              <Para>
                {item.strIngredient2} {item.strMeasure2}
              </Para>
              <Para>
                {item.strIngredient3} {item.strMeasure3}
              </Para>
              <Para>
                {item.strIngredient4} {item.strMeasure4}
              </Para>
              <Para>
                {item.strIngredient5} {item.strMeasure5}
              </Para>
              <Para>
                {item.strIngredient6} {item.strMeasure6}
              </Para>
              <Para>
                {item.strIngredient7} {item.strMeasure7}
              </Para>
              <Para>
                {item.strIngredient8} {item.strMeasure8}
              </Para>
              <Para>
                {item.strIngredient9} {item.strMeasure9}
              </Para>
              <Para>
                {item.strIngredient10} {item.strMeasure10}
              </Para>
              <Para>
                {item.strIngredient11} {item.strMeasure11}
              </Para>
              <Para>
                {item.strIngredient12} {item.strMeasure12}
              </Para>
            </>
          ) : null} */
}
