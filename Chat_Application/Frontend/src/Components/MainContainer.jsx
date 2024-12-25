import React, { createContext, useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export const myContext = createContext();
const MainContainer = () => {
  const darkMode = useSelector((state) => state.themeKey);
  const [refresh, setRefresh] = useState(true);

  // Apply theme to the entire app
  if (darkMode) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
  return (
    <div
      className={`main-container  lg:h-[90vh] lg:w-[90vw] lg:rounded-2xl lg:flex  ${
        darkMode
          ? "dark:bg-[#12273E] dark:border-[0.5px] dark:border-[#404872]"
          : "lg:bg-[#f4f5f8]"
      }`}
    >
      <myContext.Provider value={{ refresh: refresh, setRefresh: setRefresh }}>
        <Sidebar />
        <Outlet />
      </myContext.Provider>
    </div>
  );
};

export default MainContainer;
