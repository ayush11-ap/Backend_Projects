import React from "react";
import MainContainer from "./Components/MainContainer.jsx";
import Login from "./Components/Login.jsx";

const App = () => {
  return (
    <div>
      <div className="lg:bg-[#dddedd] lg:min-h-[100vh] lg:flex lg:justify-center lg:items-center lg:overflow-hidden">
        <MainContainer />
        {/* <Login /> */}
      </div>
    </div>
  );
};

export default App;
