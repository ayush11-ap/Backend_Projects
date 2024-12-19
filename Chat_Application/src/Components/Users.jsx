import React from "react";
import ConversationData from "./ConversationData";
import logo from "../Images/live-chat_welcome.png";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./style.css";
import { AnimatePresence, motion, animate, stagger } from "motion/react";

const UserGroups = () => {
  React.useEffect(() => {
    // Animate list items with staggered effect
    animate([
      ["ul", { opacity: 1 }],
      ["li", { x: [-20, 0] }, { delay: stagger(0.2) }],
    ]);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{
          ease: "anticipate",
          duration: "0.3",
        }}
        className="list-cont lg:flex-[0.7] lg:flex lg:flex-col"
      >
        <div className="ug-header lg:bg-white lg:rounded-2xl lg:py-3 lg:px-1 lg:m-2 lg:flex lg:gap-3 shadow-[-3px_3px_0px_0px_rgba(0,_0,_0,_0.1)]">
          <img
            src={logo}
            style={{ height: "2rem", width: "2rem", marginLeft: "10px" }}
            alt=""
          />
          <p className="ug-title lg:text-2xl lg:font-semibold lg:text-zinc-500">
            Online Users
          </p>
        </div>
        <div className="ug-search lg:bg-white lg:rounded-2xl lg:py-1 lg:px-1 lg:m-2 lg:flex lg:items-center shadow-[-4px_4px_0px_0px_rgba(0,_0,_0,_0.1)]">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <input
            type="text"
            placeholder="Search"
            className="lg:outline-0 lg:outline-none lg:ml-2 lg:text-lg lg:font-sans lg:font-semibold lg:text-gray-600 "
          />
        </div>
        <div
          className="ug-list lg:rounded-2xl lg:p-4 lg:m-2 lg:flex-1 lg:overflow-x-scroll
       no-scrollbar shadow-[-4px_4px_0px_0px_rgba(0,_0,_0,_0.1)]"
        >
          {/* Staggered animation for list items */}
          <ul>
            {/* div 1 */}
            <motion.li
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="list-item lg:flex lg:items-center lg:bg-white lg:rounded-2xl lg:px-3 lg:py-2 lg:m-3 lg:transition-all lg:shadow-[-4px_4px_5px_0px_rgba(0,_0,_0,_0.1)] lg:select-none"
            >
              <p className="con-icon lg:[grid-area:1/1/3/2] lg:flex lg:justify-center lg:items-center lg:bg-[#d9d9d9] lg:font-sans lg:text-4xl lg:font-bold lg:text-white lg:h-11 lg:w-11 lg:p-1 lg:rounded-full lg:justify-self-center lg:self-center ">
                A
              </p>
              <p className="con-title lg:[grid-area:1/2/2/4] font-bold lg:ml-2 lg:text-xl text-[rgba(0,0,0,0.54)]">
                Aayush
              </p>
            </motion.li>

            {/* div 2 */}
            <motion.li
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="list-item lg:flex lg:items-center lg:bg-white lg:rounded-2xl lg:px-3 lg:py-2 lg:m-3 lg:transition-all lg:shadow-[-4px_4px_5px_0px_rgba(0,_0,_0,_0.1)] lg:select-none"
            >
              <p className="con-icon lg:[grid-area:1/1/3/2] lg:flex lg:justify-center lg:items-center lg:bg-[#d9d9d9] lg:font-sans lg:text-4xl lg:font-bold lg:text-white lg:h-11 lg:w-11 lg:p-1 lg:rounded-full lg:justify-self-center lg:self-center ">
                A
              </p>
              <p className="con-title lg:[grid-area:1/2/2/4] font-bold lg:ml-2 lg:text-xl text-[rgba(0,0,0,0.54)]">
                Aayush
              </p>
            </motion.li>
            {/* div 2 */}
            <motion.li
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="list-item lg:flex lg:items-center lg:bg-white lg:rounded-2xl lg:px-3 lg:py-2 lg:m-3 lg:transition-all lg:shadow-[-4px_4px_5px_0px_rgba(0,_0,_0,_0.1)] lg:select-none"
            >
              <p className="con-icon lg:[grid-area:1/1/3/2] lg:flex lg:justify-center lg:items-center lg:bg-[#d9d9d9] lg:font-sans lg:text-4xl lg:font-bold lg:text-white lg:h-11 lg:w-11 lg:p-1 lg:rounded-full lg:justify-self-center lg:self-center ">
                A
              </p>
              <p className="con-title lg:[grid-area:1/2/2/4] font-bold lg:ml-2 lg:text-xl text-[rgba(0,0,0,0.54)]">
                Aayush
              </p>
            </motion.li>
            {/* div 2 */}
            <motion.li
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="list-item lg:flex lg:items-center lg:bg-white lg:rounded-2xl lg:px-3 lg:py-2 lg:m-3 lg:transition-all lg:shadow-[-4px_4px_5px_0px_rgba(0,_0,_0,_0.1)] lg:select-none"
            >
              <p className="con-icon lg:[grid-area:1/1/3/2] lg:flex lg:justify-center lg:items-center lg:bg-[#d9d9d9] lg:font-sans lg:text-4xl lg:font-bold lg:text-white lg:h-11 lg:w-11 lg:p-1 lg:rounded-full lg:justify-self-center lg:self-center ">
                A
              </p>
              <p className="con-title lg:[grid-area:1/2/2/4] font-bold lg:ml-2 lg:text-xl text-[rgba(0,0,0,0.54)]">
                Aayush
              </p>
            </motion.li>
            {/* div 2 */}
            <motion.li
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="list-item lg:flex lg:items-center lg:bg-white lg:rounded-2xl lg:px-3 lg:py-2 lg:m-3 lg:transition-all lg:shadow-[-4px_4px_5px_0px_rgba(0,_0,_0,_0.1)] lg:select-none"
            >
              <p className="con-icon lg:[grid-area:1/1/3/2] lg:flex lg:justify-center lg:items-center lg:bg-[#d9d9d9] lg:font-sans lg:text-4xl lg:font-bold lg:text-white lg:h-11 lg:w-11 lg:p-1 lg:rounded-full lg:justify-self-center lg:self-center ">
                A
              </p>
              <p className="con-title lg:[grid-area:1/2/2/4] font-bold lg:ml-2 lg:text-xl text-[rgba(0,0,0,0.54)]">
                Aayush
              </p>
            </motion.li>
            {/* div 2 */}
            <motion.li
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="list-item lg:flex lg:items-center lg:bg-white lg:rounded-2xl lg:px-3 lg:py-2 lg:m-3 lg:transition-all lg:shadow-[-4px_4px_5px_0px_rgba(0,_0,_0,_0.1)] lg:select-none"
            >
              <p className="con-icon lg:[grid-area:1/1/3/2] lg:flex lg:justify-center lg:items-center lg:bg-[#d9d9d9] lg:font-sans lg:text-4xl lg:font-bold lg:text-white lg:h-11 lg:w-11 lg:p-1 lg:rounded-full lg:justify-self-center lg:self-center ">
                A
              </p>
              <p className="con-title lg:[grid-area:1/2/2/4] font-bold lg:ml-2 lg:text-xl text-[rgba(0,0,0,0.54)]">
                Aayush
              </p>
            </motion.li>
          </ul>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default UserGroups;
