import React from "react";
import DoneOutlineOutlinedIcon from "@mui/icons-material/DoneOutlineOutlined";
import { IconButton } from "@mui/material";
import { useSelector } from "react-redux";

const CreateGroups = () => {
  const darkMode = useSelector((state) => state.themeKey); // Redux state for theme

  // Apply theme to the entire app
  if (darkMode) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
  return (
    <div
      className={`createGrp-cont lg:flex-[0.7] lg:self-center lg:px-5 lg:py-3 lg:m-3  lg:rounded-3xl lg:flex lg:justify-between  ${
        darkMode
          ? "dark:bg-[#1E293B] dark:border-[0.2px] dark:border-[#404872]"
          : "lg:bg-white shadow-[3px_4px_0px_0px_rgba(0,_0,_0,_0.1)]"
      }`}
    >
      <input
        type="text"
        placeholder="Enter Group Name"
        className={`search-box lg:outline-0 lg:w-full lg:px-2 lg:rounded-lg lg:outline-none lg:ml-2 lg:text-xl lg:font-sans lg:font-semibold  ${
          darkMode ? "dark:bg-[#1E293B] dark:text-white" : "lg:text-gray-600"
        }`}
      />
      <IconButton>
        <DoneOutlineOutlinedIcon className="icon dark:text-white" />
      </IconButton>
    </div>
  );
};

export default CreateGroups;
