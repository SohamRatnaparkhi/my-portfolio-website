import React from "react";
import { useContext } from "react";
import useMousePosition from "./useMousePosition";
import { MouseContext } from "../../context/mouse-context";
const Cursor = () => {
  const { cursorType, currentTheme } = useContext(MouseContext);
  const { x, y } = useMousePosition();
  return (
    <>
      <div
        className={`ring ${cursorType} ${currentTheme}`}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
      <div
        className={`dot ${cursorType} ${currentTheme} `}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  );
};
export default Cursor;
