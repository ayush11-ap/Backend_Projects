import React, { useState } from "react";
import Sidebar from "./Sidebar";
import WorkArea from "./WorkArea";
import ChatArea from "./ChatArea";
import WelcomePage from "./WelcomePage";
import CreateGroups from "./CreateGroups";

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
    <div className="main-container lg:bg-[#f4f5f8] lg:h-[90vh] lg:w-[90vw] lg:rounded-2xl lg:flex">
      <Sidebar />
      {/* <WorkArea /> */}
      {/* <ChatArea /> */}
      {/* <WelcomePage /> */}
      <CreateGroups />
    </div>
  );
};

export default MainContainer;
