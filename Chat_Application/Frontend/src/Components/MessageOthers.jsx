import React from "react";
import { useDispatch, useSelector } from "react-redux";

const MessageOthers = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.themeKey);

  if (darkMode) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
  return (
    <div className="other-msg-container">
      <div className="conversation-container lg:grid lg:grid-cols-[24px_auto_auto] lg:grid-rows-[auto_auto] lg:gap-x-2.5 lg:p-1.25 lg:my-4 lg:mx-3 lg:rounded-[20px]">
        <p
          className={`con-icon lg:[grid-area:1/1/3/2] lg:flex lg:justify-center lg:items-center  lg:font-sans lg:text-4xl lg:font-bold  lg:h-11 lg:w-11 lg:p-1 lg:rounded-full lg:justify-self-center lg:self-center ${
            darkMode
              ? "dark:bg-white dark:text-[#38BDF8]"
              : "lg:text-white lg:bg-[#d9d9d9]"
          }`}
        >
          O
        </p>
        <div
          className={`other-txt-content lg:min-w-40  lg:px-3 lg:py-3 lg:m-3 lg:rounded-3xl lg:mt-3 lg:flex lg:flex-col ${
            darkMode
              ? "dark:bg-[#3331315d] dark:border-[0.2px] dark:border-[#404872]"
              : "lg:bg-[#d9d9d9]"
          }`}
        >
          <p
            className={`con-title lg:[grid-area:1/2/2/4] font-bold  ${
              darkMode ? "dark:text-[#38BDF8]" : "text-[rgba(0,0,0,0.54)]"
            }`}
          >
            Other User
          </p>
          <p
            className={`con-lastMessage lg:text-sm mt-1 ${
              darkMode ? "dark:text-[#8F9DB2]" : "text-[rgba(0,0,0,0.54)]"
            }`}
          >
            Hii! This is a sample misal lorem30
          </p>
          <p
            className={`con-lastMessage lg:text-sm lg:self-end lg:mt-[6px]  ${
              darkMode ? "dark:text-[#8F9DB2]" : "text-[rgba(0,0,0,0.54)]"
            }`}
          >
            9:03 am
          </p>
        </div>
      </div>
    </div>
  );
};

export default MessageOthers;
