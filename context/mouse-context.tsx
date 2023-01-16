import React, { createContext, useState } from "react";

export const MouseContext = createContext({
  cursorType: "",
  currentTheme: "",
  cursorChangeHandler: (_cursorType : string, _currentTheme: string) => {},
});

const MouseContextProvider = (props : any) => {
  const [cursorType, setCursorType] = useState("");
  const [currentTheme, setCurrentTheme] = useState("");
  const cursorChangeHandler = (cursorType : string, currentTheme: string) => {
    setCursorType(cursorType);
    if (currentTheme !== "")
      setCurrentTheme(currentTheme);
  };

  return (
    <MouseContext.Provider
      value={{
        cursorType: cursorType,
        currentTheme: currentTheme,
        cursorChangeHandler: cursorChangeHandler,
      }}
    >
      {props.children}
    </MouseContext.Provider>
  );
};

export default MouseContextProvider;