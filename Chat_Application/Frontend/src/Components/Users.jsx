import React from "react";
import ConversationData from "./ConversationData";
import logo from "../Images/live-chat_welcome.png";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./style.css";
import { AnimatePresence, motion, animate, stagger } from "motion/react";
import { useDispatch, useSelector } from "react-redux";
//${darkMode ? "" : ""}
const UserGroups = () => {
  React.useEffect(() => {
    animate(
      ".list-item",
      { x: [-20, 0], opacity: [0, 1] },
      { delay: stagger(0.25) }
    );
  }, []);

  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.themeKey); // Redux state for theme

  // Apply theme to the entire app
  if (darkMode) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{
          ease: "anticipate",
          duration: 0.3,
        }}
        className="list-cont lg:flex-[0.7] lg:flex lg:flex-col"
      >
        <div
          className={`ug-header  lg:rounded-2xl lg:py-3 lg:px-1 lg:m-2 lg:mr-6 lg:flex lg:gap-3  ${
            darkMode
              ? "dark:bg-[#1E293B] dark:border-[0.2px] dark:border-[#404872] dark:text-[#8F9DB2]"
              : "shadow-[3px_3px_0px_0px_rgba(0,_0,_0,_0.1)] lg:bg-white"
          }`}
        >
          <img
            src={logo}
            style={{ height: "2rem", width: "2rem", marginLeft: "10px" }}
            alt=""
          />
          <p className="ug-title lg:text-2xl lg:font-semibold lg:text-zinc-500">
            Online Users
          </p>
        </div>
        <div
          className={`sb-search hidden md:block lg:bg-white lg:rounded-2xl lg:py-1 lg:px-1 lg:m-2 lg:mr-6 lg:flex lg:items-center ${
            darkMode
              ? "dark:bg-[#1E293B] dark:border-[0.2px] dark:border-[#404872]"
              : "shadow-[-4px_4px_0px_0px_rgba(0,_0,_0,_0.1)]"
          }`}
        >
          <IconButton>
            <SearchIcon className="icon dark:text-white" />
          </IconButton>
          <input
            type="text"
            placeholder="Search"
            className={`lg:outline-0 lg:outline-none lg:ml-2 lg:text-lg lg:font-sans lg:font-semibold  ${
              darkMode
                ? "dark:bg-[#1E293B] dark:text-[#8F9DB2] "
                : "lg:text-gray-600"
            }`}
          />
        </div>
        <div
          className={`ug-list lg:rounded-2xl lg:p-4 lg:m-2 lg:mr-6 lg:flex-1 lg:overflow-x-scroll
       no-scrollbar  ${
         darkMode
           ? "dark:bg-[#1E293B] dark:border-[1.2px] dark:border-[#404872]"
           : "shadow-[3px_3px_0px_0px_rgba(0,_0,_0,_0.1)]"
       }`}
        >
          {/* Staggered animation for list items */}

          {/* div 1 */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className={`list-item lg:flex lg:items-center  lg:rounded-2xl lg:px-3 lg:py-2 lg:m-3 lg:transition-all  lg:select-none ${
              darkMode
                ? "dark:bg-[#1E293B] dark:border-[1.2px] dark:border-[#404872]"
                : "lg:bg-white lg:shadow-[-4px_4px_5px_0px_rgba(0,_0,_0,_0.1)]"
            }`}
          >
            <p
              className={`con-icon lg:[grid-area:1/1/3/2] lg:flex lg:justify-center lg:items-center  lg:font-sans lg:text-4xl lg:font-bold  lg:h-11 lg:w-11 lg:p-1 lg:rounded-full lg:justify-self-center lg:self-center ${
                darkMode
                  ? "dark:bg-white dark:text-[#38BDF8]"
                  : "lg:bg-[#d9d9d9] lg:text-white"
              }`}
            >
              A
            </p>
            <p
              className={`con-title lg:[grid-area:1/2/2/4] font-bold lg:ml-2 lg:text-xl  ${
                darkMode ? "dark:text-[#38BDF8]" : "text-[rgba(0,0,0,0.54)]"
              }`}
            >
              Aayush
            </p>
          </motion.div>
          {/* div 1 */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className={`list-item lg:flex lg:items-center  lg:rounded-2xl lg:px-3 lg:py-2 lg:m-3 lg:transition-all  lg:select-none ${
              darkMode
                ? "dark:bg-[#1E293B] dark:border-[1.2px] dark:border-[#404872]"
                : "lg:bg-white lg:shadow-[-4px_4px_5px_0px_rgba(0,_0,_0,_0.1)]"
            }`}
          >
            <p
              className={`con-icon lg:[grid-area:1/1/3/2] lg:flex lg:justify-center lg:items-center  lg:font-sans lg:text-4xl lg:font-bold  lg:h-11 lg:w-11 lg:p-1 lg:rounded-full lg:justify-self-center lg:self-center ${
                darkMode
                  ? "dark:bg-white dark:text-[#38BDF8]"
                  : "lg:bg-[#d9d9d9] lg:text-white"
              }`}
            >
              A
            </p>
            <p
              className={`con-title lg:[grid-area:1/2/2/4] font-bold lg:ml-2 lg:text-xl  ${
                darkMode ? "dark:text-[#38BDF8]" : "text-[rgba(0,0,0,0.54)]"
              }`}
            >
              Aayush
            </p>
          </motion.div>
          {/* div 1 */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className={`list-item lg:flex lg:items-center  lg:rounded-2xl lg:px-3 lg:py-2 lg:m-3 lg:transition-all  lg:select-none ${
              darkMode
                ? "dark:bg-[#1E293B] dark:border-[1.2px] dark:border-[#404872]"
                : "lg:bg-white lg:shadow-[-4px_4px_5px_0px_rgba(0,_0,_0,_0.1)]"
            }`}
          >
            <p
              className={`con-icon lg:[grid-area:1/1/3/2] lg:flex lg:justify-center lg:items-center  lg:font-sans lg:text-4xl lg:font-bold  lg:h-11 lg:w-11 lg:p-1 lg:rounded-full lg:justify-self-center lg:self-center ${
                darkMode
                  ? "dark:bg-white dark:text-[#38BDF8]"
                  : "lg:bg-[#d9d9d9] lg:text-white"
              }`}
            >
              A
            </p>
            <p
              className={`con-title lg:[grid-area:1/2/2/4] font-bold lg:ml-2 lg:text-xl  ${
                darkMode ? "dark:text-[#38BDF8]" : "text-[rgba(0,0,0,0.54)]"
              }`}
            >
              Aayush
            </p>
          </motion.div>
          {/* div 1 */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className={`list-item lg:flex lg:items-center  lg:rounded-2xl lg:px-3 lg:py-2 lg:m-3 lg:transition-all  lg:select-none ${
              darkMode
                ? "dark:bg-[#1E293B] dark:border-[1.2px] dark:border-[#404872]"
                : "lg:bg-white lg:shadow-[-4px_4px_5px_0px_rgba(0,_0,_0,_0.1)]"
            }`}
          >
            <p
              className={`con-icon lg:[grid-area:1/1/3/2] lg:flex lg:justify-center lg:items-center  lg:font-sans lg:text-4xl lg:font-bold  lg:h-11 lg:w-11 lg:p-1 lg:rounded-full lg:justify-self-center lg:self-center ${
                darkMode
                  ? "dark:bg-white dark:text-[#38BDF8]"
                  : "lg:bg-[#d9d9d9] lg:text-white"
              }`}
            >
              A
            </p>
            <p
              className={`con-title lg:[grid-area:1/2/2/4] font-bold lg:ml-2 lg:text-xl  ${
                darkMode ? "dark:text-[#38BDF8]" : "text-[rgba(0,0,0,0.54)]"
              }`}
            >
              Aayush
            </p>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default UserGroups;
