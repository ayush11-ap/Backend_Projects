import React from "react";
import MainContainer from "./Components/MainContainer.jsx";
import Login from "./Components/Login.jsx";
import { Route, Routes } from "react-router-dom";
import WelcomePage from "./Components/WelcomePage.jsx";
import ChatArea from "./Components/ChatArea.jsx";
import Users from "./Components/Users.jsx";
import Groups from "./Components/Groups.jsx";
import CreateGroups from "./Components/CreateGroups.jsx";

const App = () => {
  return (
    <div>
      <div className="lg:bg-[#dddedd] lg:min-h-[100vh] lg:flex lg:justify-center lg:items-center lg:overflow-hidden dark:bg-gray-700">
        {/* <MainContainer /> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="app" element={<MainContainer />}>
            <Route path="welcome" element={<WelcomePage />} />
            <Route path="chat/:_id" element={<ChatArea />} />
            <Route path="users" element={<Users />} />
            <Route path="groups" element={<Groups />} />
            <Route path="createGroups" element={<CreateGroups />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
