import Link from "next/link";
import React from "react";
import { SHORT_NAME } from "../constants/data";
import { THEME_MENU, THEMES } from "../constants/web.data";
import { MENU } from "../constants/web.data";
import { useState, useEffect } from "react";
import { themeChange } from "theme-change";
import { Sacramento } from "@next/font/google";
import { MouseContext } from "../context/mouse-context";

const sacra = Sacramento({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const Navbar = () => {
  const { cursorChangeHandler } = React.useContext(MouseContext);

  const [scrollState, setScrollState] = useState(false);

  let listener: any = null;
  useEffect(() => {
    listener = document.addEventListener("scroll", () => {
      var scrolled: any = document.scrollingElement!.scrollTop;
      if (scrolled >= 120) {
        if (!scrollState) {
          setScrollState(true);
        }
      } else {
        if (scrollState) {
          setScrollState(false);
        }
      }
    });

    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scrollState]);

  const [theme, setTheme] = useState("light");
  const themeSize = THEMES.length;
  const sliderMaxSize = (themeSize - 1) * 2;
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  const [selectedId, setSelectedId] = useState(0);

  return (
    <div
      className={`flex flex-row justify-between w-full justify-between ${
        scrollState
          ? `inset-x-0 top-0 z-50 w-full transition duration-300 ease-in-out border-b border-transparent bg-primary text-primary-content fixed navbar`
          : `fixed inset-x-0 top-0 z-50 w-full transition duration-300 ease-in-out bg-transparent border-b border-transparent navbar`
      } `}
    >
      <div
        className={`order-2 justify-center sm:order-1 my-name px-3  ${sacra.className}`}
        onMouseEnter={() => cursorChangeHandler("hovered", theme)}
        onMouseLeave={() => cursorChangeHandler("", theme)}
      >
        <h1 className="text-extrabold text-2xl hover:text-3xl hover:text-primary-focus-content px-2">
          {SHORT_NAME}
        </h1>
      </div>

      <div className="navbar-options order-1 sm:order-2">
        {MENU.map((item, i) => {
          return (
            <Link
              onMouseEnter={() => cursorChangeHandler("hovered", theme)}
              onMouseLeave={() => cursorChangeHandler("", theme)}
              onClick={() => {
                setSelectedId(i);
              }}
              className={`hidden text-md hover:bg-base hover:text-2xl sm:inline-block mx-4 px-2 md:mx-8 ${
                selectedId === i
                  ? "text-blue-500 text-bold text-lg font-sans"
                  : "text-primary-content"
              }`}
              href={item.link}
              key={item.key}
            >
              {item.title}{" "}
            </Link>
          );
        })}
        <div className="collapsible-menu sm:hidden">
          <div className="dropdown dropdown-right rounded-box">
            <div tabIndex={0} className="btn btn-ghost rounded-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
            <div className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
              {MENU.map((item, i) => {
                return (
                  <p>
                    <Link
                      onClick={() => {
                        setSelectedId(i);
                      }}
                      className={`px-2 md:px-4 ${
                        selectedId === i
                          ? "text-blue-500 text-bold text-lg"
                          : "text-gray-500"
                      }`}
                      href={item.link}
                      key={item.key}
                    >
                      {item.title}{" "}
                    </Link>{" "}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="order-3 sm:order-3 py-3 theme-options flex flex-col w-20 px-3">
        <input
          type="range"
          min="0"
          max={sliderMaxSize}
          defaultValue={0}
          className="range hidden sm:block"
          step="2"
          data-choose-theme="true"
          data-set-theme={theme}
          onMouseEnter={() => cursorChangeHandler("disabled", theme)}
          onMouseLeave={() => cursorChangeHandler("", theme)}
          // data-act-class="ACTIVECLASS"
          onChange={(e) => {
            setTheme(THEMES[parseInt(e.target.value) / sliderMaxSize]);
          }}
        />
        {/* <select data-choose-theme>
          <option value="light">Default</option>
          <option value="dark">Dark</option>
          <option value="pink">Pink</option>
        </select> */}
        <div className="flex justify-between text-md px-2">
          {THEME_MENU.map((item) => {
            return (
              <div
                className="hidden sm:flex flex-col px-2 items-center"
                key={item.key}
              >
                <span className="text-xl hover:cursor-pointer">
                  {item.title === theme ? item.emoji : null}
                </span>
              </div>
            );
          })}
          <button
            className="btn btn-base sm:hidden"
            data-toggle-theme="dark,light"
            data-act-class="ACTIVECLASS"
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light");
            }}
            data-set-theme={theme}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;