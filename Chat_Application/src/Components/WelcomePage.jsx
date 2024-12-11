import React from "react";
import logo from "../Images/live-chat_welcome.png";

const WelcomePage = () => {
  return (
    <div className="welcome-cont lg:flex-[0.7] lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-5 lg:text-[rgba(0,0,0,0.54)] lg:border-b-4 lg:border-sky-400 lg:rounded-2xl">
      <img src={logo} alt="" className="welcome-logo" />
      <p>View and text directly to people present in the chat Rooms.</p>
    </div>
  );
};
export default WelcomePage;
