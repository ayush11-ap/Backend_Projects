import React from "react";
import logo from "../Images/live-chat_welcome.png";
import { useDispatch, useSelector } from "react-redux";

const WelcomePage = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.themeKey);

  // Apply theme to the entire app
  if (darkMode) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
  return (
    <div
      className={`welcome-cont lg:flex-[0.7] lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-5  lg:border-b-4 lg:border-sky-400 lg:rounded-2xl lg:text-2xl font-semibold ${
        darkMode ? "dark:text-[#8F9DB2]" : "text-[rgba(0,0,0,0.54)]"
      }`}
    >
      <img src={logo} alt="" className="welcome-logo" />
      <p>View and text directly to people present in the chat Rooms.</p>
    </div>
  );
};
export default WelcomePage;
