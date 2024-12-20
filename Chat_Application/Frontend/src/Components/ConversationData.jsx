import { DarkMode } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence, motion, animate, stagger } from "motion/react";

const ConversationData = ({ props }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.themeKey); // Redux state for theme

  // Apply theme to the entire app
  if (darkMode) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => {
        navigate("chat");
      }}
      className={`conversation-container cursor-pointer lg:grid lg:grid-cols-[52px_auto_auto] lg:grid-rows-[auto_auto] lg:gap-x-2.5 lg:px-2 lg:py-2 lg:my-3 lg:mx-3 lg:rounded-[20px]  ${
        darkMode
          ? "dark:text-[#38BDF8] dark:border-[0.2px] dark:border-[#404872]"
          : "hover:bg-[#d9d9d9] active:bg-white duration-300 shadow-[-3px_3px_0px_0px_rgba(0,_0,_0,_0.1)]"
      }`}
    >
      <p
        className={`con-icon lg:[grid-area:1/1/3/2] lg:flex lg:justify-center lg:items-center  lg:font-sans lg:text-4xl lg:font-bold  lg:h-11 lg:w-11 lg:p-1 lg:rounded-full lg:justify-self-center lg:self-center ${
          darkMode
            ? "dark:bg-white dark:text-[#38BDF8]"
            : "lg:bg-[#d9d9d9] lg:text-white"
        }`}
      >
        {props.name[0]}
      </p>
      <p
        className={`con-title lg:[grid-area:1/2/2/4] font-bold  ${
          darkMode ? "dark:text-[#38BDF8]" : "text-[rgba(0,0,0,0.54)]"
        }`}
      >
        {props.name}
      </p>
      <p
        className={`con-lastMessage lg:text-sm  ${
          darkMode ? "dark:text-[#8F9DB2]" : "text-[rgba(0,0,0,0.54)]"
        }`}
      >
        {props.lastMessage}
      </p>
      <p
        className={`con-timeStamp lg:text-sm  ${
          darkMode ? "dark:text-[#8F9DB2]" : "text-[rgba(0,0,0,0.54)]"
        }`}
      >
        {props.timeStamp}
      </p>
    </motion.div>
  );
};

export default ConversationData;

//dark:text-[#8F9DB2]
