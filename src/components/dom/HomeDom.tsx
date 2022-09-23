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
  padding: 70px 50px;
`;

const Marker = styled.span`
  color: gold;
  position: absolute;
  top: 0px;
  left: 140px;
  font-family: monospace;
`;

const Image = styled(a.div)`
  width: 100%;
  height: 100%;
  border-radius: 45px;
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

const Para = styled.p`
  color: gold;
`;

const H1 = styled.h1`
  color: gold;
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
const InstText = styled(a.div)`
  height: 100%;
  width: 90%;
  line-height: 100%;
  padding-left: 2%;
  padding-top: 2%;

  margin: 1em;
  color: white;
  font-size: 100%;
  // font-weight: 600;
  will-change: transform, opacity;
  // overflow: hidden;
  -webkit-text-stroke: 2px white;
  & > div {
    overflow: hidden;
  }
`;

const Cover = styled(a.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: black;
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

//
//
//
// -----------

const ImageItem = ({ item, index }) => {
  // const [flipped, set] = useState(false);
  // const recipeData = useRecipeStore((state) => state.recipeData);
  const [hovered, setHover] = useState(false);
  const { opacity, scale } = useSpring({
    opacity: hovered ? 0.4 : 0,
    scale: hovered ? 0.95 : 1,
  });
  const [clicked, setClicked] = useState(false);
  const transform = scale.to((s) => `scale(${s})`);
  return (
    <>
      <Content onClick={() => setClicked((state) => !state)}>
        {/* <Content> */}
        {clicked ? (
          <div>
            <H1>Ingredients:</H1>
            <Para>
              {item.strIngredient1} {item.strMeasure1}
            </Para>
            <Para>{item.strIngredient2}</Para>
            <Para>{item.strIngredient3}</Para>
            <Para>{item.strIngredient4}</Para>
            <Para>{item.strIngredient5}</Para>
            <Para>{item.strIngredient6}</Para>
            <Para>{item.strIngredient7}</Para>
            <Para>{item.strIngredient8}</Para>
            <Para>{item.strIngredient9}</Para>
            <Para>{item.strIngredient10}</Para>
          </div>
        ) : null}

        {clicked ? (
          <div>
            <H1>Measures:</H1>
            <Para>{item.strMeasure1}</Para>
            <Para>{item.strMeasure2}</Para>
            <Para>{item.strMeasure3}</Para>
            <Para>{item.strMeasure4}</Para>
            <Para>{item.strMeasure5}</Para>
            <Para>{item.strMeasure6}</Para>
            <Para>{item.strMeasure7}</Para>
            <Para>{item.strMeasure8}</Para>
            <Para>{item.strMeasure9}</Para>
            <Para>{item.strMeasure10}</Para>
            <Para>{item.strMeasure11}</Para>
          </div>
        ) : null}

        <Image
          // onClick={() => setClicked((state) => !state)}
          // style={{ transform, backgroundImage: `url(${item})`}}
          style={{ transform, backgroundImage: `url(${item.strMealThumb})` }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <Cover style={{ opacity }} />
          {clicked ? (
            <InstText>{`Instructions:   ${item.strInstructions}`}</InstText>
          ) : null}
        </Image>

        <Trail text={item.strMeal} visible={hovered} />
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
      </Main>
    </>
  );
}

export default HomeDom;

//
//
// from HomeDom function
// const recipeFoodName = [recipeData.meals.map((meals: any) => meals.strMeal)].toString();
// const recipeFoodImage = [recipeData.meals.map((meals: any) => meals.strMealThumb)].toString();
//  const imageLinks = useMemo(() => recipeFoodImage.split(","));

// for (let index = 0; index < recipeData.meals.length; index++) {
//   const element = recipeData.meals[index];
//   console.log("these are the elements", element);
// }
// const recipeFoodName = [recipeData.meals.map((meals: any) => meals.strMeal)];
// const recipeFoodImage = [recipeData.meals.map((meals: any) => meals.strMealThumb)];
//
//

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// <InfiniteSlider items={recipeData.meals===null? (<p>Sorry, We don't Have that Recipe. Please try another Food or enter a
// valid Input</p>): (recipeData.meals)} width={700} visible={4}>

// function Card() {
//   const [flipped, set] = useState(false);
//   const { flipTransform, opacity } = useSpring({
//     opacity: flipped ? 1 : 0,
//     flipTransform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
//     config: { mass: 5, tension: 500, friction: 80 },
//   });
//   return (
//     <div onClick={() => set((state) => !state)}>
//       <a.div
//         // class="c"
//         style={{
//           opacity: opacity.to((o) => 1 - o),
//           flipTransform,
//           backgroundImage:
//             "url(https://www.themealdb.com/images/media/meals/naqyel1608588563.jpg)",
//           position: "absolute",
//           maxWidth: "500px",
//           maxHeight: "500px",
//           width: "50ch",
//           height: "50ch",

//           willChange: ("flipTransform", "opacity"),
//         }}
//       />
//       <a.div
//         style={{
//           opacity,
//           backgroundImage:
//             "url(https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80&auto=format&fit=crop)",
//           backgroundSize: "cover",
//           transform: flipTransform.to((t) => `${t} rotateX(180deg)`),
//           position: "absolute",
//           maxWidth: "500px",
//           maxHeight: "500px",
//           width: "50ch",
//           height: "50ch",

//           willChange: ("flipTransform", "opacity"),
//         }}
//       />
//     </div>
//   );
// }

//
// End of Styled conponents ---------
//

// function Instructions({ instructions, visible }) {
//   const words = useMemo(() => instructions.split(" "), [instructions]);
//   const trailInst = useTrail(words.length, {
//     opacity: visible ? 1 : 0,
//     x: visible ? 0 : 20,
//     height: visible ? 90 : 0,
//     from: { opacity: 0, x: 20, height: 0 },
//     config: { tension: 2500, friction: 200 },
//   });

//   return (
//     <Container>
//       <div>
//         {trailInst.map(({ x, height, ...rest }, index) => (
//           <InstText
//             key={words[index]}
//             style={{
//               ...rest,
//               transform: x.to((x) => `translate3d(0,${x}px,0)`),
//             }}
//           >
//             <a.div style={{ height }}>{words[index]}</a.div>
//           </InstText>
//         ))}
//       </div>
//     </Container>
//   );
// }

// from ImageItem Functon

// const [flipped, set] = useState(false);
// const { flipTransform, nopacity } = useSpring({
//   nopacity: flipped ? 1 : 0,
//   flipTransform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
//   config: { mass: 5, tension: 500, friction: 80 },
// });
// let text = "123456789";
// let pattern = /[1-4]/g;
// let result = text.match(pattern)
{
  /* <a.div
        class="c"
        style={{
          opacity: opacity.to((o) => 1 - o),
          flipTransform,
          // backgroundImage: `url(${item.strMealThumb})`,
          // position: "absolute",
          // // maxWidth: "500px",
          // // maxHeight: "500px",
          // width: "50ch",
          // height: "50ch",

          // willChange: ("flipTransform", "opacity"),
        }}
      /> */
}
{
  /* <a.div
      class="c"
        style={{
          opacity,
          // backgroundImage: `url(${item.strMealThumb})`,
          // backgroundSize: "cover",
          transform: flipTransform.to((t) => `${t} rotateX(180deg)`),
          // position: "absolute",
          // maxWidth: "500px",
          // maxHeight: "500px",
          // width: "50ch",
          // height: "50ch",

          // willChange: ("flipTransform", "opacity"),
        }}
      /> */
}
// const Main = styled.div`
//   height: 100vh;
//   width: 100vw;
// `;

// const Content = styled.div`
//   width: 100%;
//   height: 100%;
// `;

// const Marker = styled.span`
//   color: white;
//   position: absolute;
//   top: 0px;
//   left: 140px;
//   font-family: monospace;
// `;

// const Image = styled(a.div)`
//   width: 100%;
//   height: 100%;
//   background-size: cover;
//   background-position: center center;
// `;

// const Container = styled.div`
//   position: absolute;
//   top: 100px;
//   left: 0px;
//   overflow: hidden;
//   cursor: pointer;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   pointer-events: none;
// `;

// const Text = styled(a.div)`
//   height: 90px;
//   line-height: 90px;
//   color: transparent;
//   font-size: 7em;
//   font-weight: 600;
//   will-change: transform, opacity;
//   overflow: hidden;
//   -webkit-text-stroke: 2px white;
//   & > div {
//     overflow: hidden;
//   }
// `;

// const Main = styled.div`
//   height: 400px;
// `;

//
//
//
// `url(https://www.themealdb.com/images/media/meals/naqyel1608588563.jpg)`
