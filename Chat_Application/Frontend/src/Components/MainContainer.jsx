import React, { useState } from "react";
import Sidebar from "./Sidebar";
import WorkArea from "./WorkArea";
import ChatArea from "./ChatArea";
import WelcomePage from "./WelcomePage";
import CreateGroups from "./CreateGroups";
import UserGroups from "./Users";
import { Outlet } from "react-router-dom";

const MainContainer = () => {
  // const [userData, setUserData] = useState([
  //   {
  //     name: "A@Y|_|$|-|",
  //     lastMessage: "Last Message #1",
  //     timeStamp: "today",
  //     id: 1,
  //   },
  // ]);
  return (
    <div className="main-container lg:bg-[#f4f5f8] lg:h-[90vh] lg:w-[90vw] lg:rounded-2xl lg:flex dark:bg-[#12273E] dark:border-[0.5px] dark:border-[#404872]">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default MainContainer;
