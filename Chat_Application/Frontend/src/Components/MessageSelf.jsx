import React from "react";
import { useDispatch, useSelector } from "react-redux";

const MessageSelf = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.themeKey);

  if (darkMode) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
  return (
    <div className="self-msg-container lg:flex lg:justify-end">
      <div
        className={`msgBox lg:flex lg:flex-col text-[18px] lg:min-w-96 lg:px-4 lg:py-3 lg:m-2 lg:rounded-3xl ${
          darkMode
            ? "dark:bg-[#005C4B] dark:text-white font-semibold"
            : "lg:bg-emerald-200"
        }`}
      >
        <p>This is sample misal pav</p>
        <p
          className={`self-timeStamp lg:text-sm  lg:self-end lg:font-light ${
            darkMode ? "dark:text-[#d9d9d9]" : "text-[rgba(0,0,0,0.54)]"
          }`}
        >
          9:03 am
        </p>
      </div>
    </div>
  );
};

export default MessageSelf;
