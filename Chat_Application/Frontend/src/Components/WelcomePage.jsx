import React from "react";
import logo from "../Images/live-chat_welcome.png";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const darkMode = useSelector((state) => state.themeKey);
  const userData = JSON.parse(localStorage.getItem("userData"));
  console.log(userData);
  const nav = useNavigate();
  if (!userData) {
    console.log("User not Authenticated");
    nav("/");
  }

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
      <motion.img
        drag
        whileTap={{ scale: 1.05, rotate: 360 }}
        src={logo}
        alt=""
        className="welcome-logo"
      />
      <span className="lg:text-2xl my-4 italic text-zinc-800">
        Hi, {userData.data.name} 👋
      </span>
      <p>View and text directly to people present in the chat Rooms.</p>
    </div>
  );
};
export default WelcomePage;
