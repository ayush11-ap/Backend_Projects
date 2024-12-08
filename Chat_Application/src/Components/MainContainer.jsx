import React from "react";
import Sidebar from "./Sidebar";
import WorkArea from "./WorkArea";

const MainContainer = () => {
  return (
    <div className="main-container lg:bg-[#f4f5f8] lg:h-[90vh] lg:w-[90vw] lg:rounded-2xl lg:flex">
      <Sidebar />
      <WorkArea />
    </div>
  );
};

export default MainContainer;
