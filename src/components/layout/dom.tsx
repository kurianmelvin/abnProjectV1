import { useEffect, useRef } from "react";

import useStore from "@/helpers/store";

const Dom = ({ children }) => {
  const ref = useRef(null);
  // useEffect(() => {
  //   useStore.setState({ dom: ref })
  // }, [])

  return (
    <div
      className="dom"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 10,
        overflow: "hidden",
      }}
      ref={ref}
    >
      {children}
    </div>
  );
};

export default Dom;
