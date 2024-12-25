import React, { useContext, useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ConversationData from "./ConversationData";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { useSelector } from "react-redux";
import { toggleTheme } from "../Features/themeSlice";
import { AnimatePresence, motion, animate, stagger } from "motion/react";
import { myContext } from "./MainContainer";
import axios from "axios";

const Sidebar = () => {
  const navigate = useNavigate();
  const darkMode = useSelector((state) => state.themeKey);

  // Apply theme to the entire app
  if (darkMode) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  const { refresh, setRefresh } = useContext(myContext);
  console.log("Context API : refresh : ", refresh);
  const [conversations, setConversations] = useState([]);
  // console.log("Conversations of Sidebar : ", conversations);
  const userData = JSON.parse(localStorage.getItem("userData"));
  // console.log("Data from LocalStorage : ", userData);
  const nav = useNavigate();
  if (!userData) {
    console.log("User not Authenticated");
    nav("/");
  }

  const user = userData.data;
  useEffect(() => {
    // console.log("Sidebar : ", user.token);
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    axios.get("http://localhost:8080/chat/", config).then((response) => {
      console.log("Data refresh in sidebar ", response.data);
      setConversations(response.data);
      // setRefresh(!refresh);
    });
  }, [refresh]);

  return (
    <div className="sidebar-container flex-row lg:flex lg:flex-[0.3] lg:flex-col">
      <div
        className={`sb-header bg-white rounded-2xl py-3 px-1 m-2 flex justify-between flex-col lg:flex-row  lg:flex-grow-0 ${
          darkMode
            ? "dark:bg-[#1E293B] dark:border-[0.2px] dark:border-[#404872]"
            : "shadow-[-3px_3px_0px_0px_rgba(0,_0,_0,_0.1)]"
        }`}
      >
        <div className="flex flex-col">
          <IconButton
            onClick={() => {
              nav("/app/welcome");
            }}
          >
            <AccountCircleIcon className="account-icon dark:text-[#38BDF8]" />
          </IconButton>
        </div>
        <div className="flex flex-col md:flex-col lg:flex-row">
          <IconButton onClick={() => navigate("users")}>
            <PersonAddIcon className="icon dark:text-white" />
          </IconButton>
          <IconButton onClick={() => navigate("groups")}>
            <GroupAddIcon className="icon dark:text-white" />
          </IconButton>
          <IconButton onClick={() => navigate("createGroups")}>
            <AddBoxIcon className="icon dark:text-white" />
          </IconButton>
          <IconButton onClick={() => dispatch(toggleTheme())}>
            {darkMode ? (
              <LightModeIcon className="icon dark:text-white" />
            ) : (
              <DarkModeIcon className="icon " />
            )}
          </IconButton>
          <IconButton
            onClick={() => {
              localStorage.removeItem("userData");
              navigate("/");
            }}
          >
            <ExitToAppIcon className="icon dark:text-white" />
          </IconButton>
        </div>
      </div>
      <div
        className={`sb-search hidden md:block lg:bg-white lg:rounded-2xl lg:py-1 lg:px-1 lg:m-2 lg:flex lg:items-center ${
          darkMode
            ? "dark:bg-[#1E293B] dark:border-[0.2px] dark:border-[#404872]"
            : "shadow-[-4px_4px_0px_0px_rgba(0,_0,_0,_0.1)]"
        }`}
      >
        <IconButton>
          <SearchIcon className="icon dark:text-white" />
        </IconButton>
        <input
          type="text"
          placeholder="Search"
          className={`lg:outline-0 lg:outline-none lg:ml-2 lg:text-lg lg:font-sans lg:font-semibold  ${
            darkMode
              ? "dark:bg-[#1E293B] dark:text-[#8F9DB2] "
              : "lg:text-gray-600"
          }`}
        />
      </div>
      <div
        className={`sb-conversations hidden md:block lg:block lg:bg-white lg:rounded-2xl lg:py-4 lg:px-5 lg:m-2 lg:flex-1  ${
          darkMode
            ? "dark:bg-[#1E293B] dark:border-[0.2px] dark:border-[#404872]"
            : "shadow-[-4px_4px_0px_0px_rgba(0,_0,_0,_0.1)]"
        }`}
      >
        {conversations.map((conversation, index) => {
          if (conversation.users.length === 1) {
            return <div key={index}></div>;
          }
          if (conversation.latestMessage === undefined) {
            // console.log("No Latest Message with ", conversation.users[1]);
            return (
              <div
                key={index}
                onClick={() => {
                  console.log("Refresh fired from sidebar");
                  // dispatch(refreshSidebarFun());
                  setRefresh(!refresh);
                }}
              >
                <motion.div
                  key={index}
                  className={`conversation-container cursor-pointer lg:grid lg:grid-cols-[52px_auto_auto] lg:grid-rows-[auto_auto] lg:gap-x-2.5 lg:px-2 lg:py-2 lg:my-3 lg:mx-3 lg:rounded-[20px]  ${
                    darkMode
                      ? "dark:text-[#38BDF8] dark:border-[0.2px] dark:border-[#404872]"
                      : "hover:bg-[#d9d9d9] active:bg-white duration-300 shadow-[-3px_3px_0px_0px_rgba(0,_0,_0,_0.1)]"
                  }`}
                  onClick={() => {
                    navigate(
                      "chat/" +
                        conversation._id +
                        "&" +
                        conversation.users[1].name
                    );
                  }}
                  // dispatch change to refresh so as to update chatArea
                >
                  <p
                    className={`con-icon lg:[grid-area:1/1/3/2] lg:flex lg:justify-center lg:items-center  lg:font-sans lg:text-4xl lg:font-bold  lg:h-11 lg:w-11 lg:p-1 lg:rounded-full lg:justify-self-center lg:self-center ${
                      darkMode
                        ? "dark:bg-white dark:text-[#38BDF8]"
                        : "lg:bg-[#d9d9d9] lg:text-white"
                    }`}
                  >
                    {conversation.users[1].name[0]}
                  </p>
                  <p
                    className={`con-title lg:[grid-area:1/2/2/4] font-bold  ${
                      darkMode
                        ? "dark:text-[#38BDF8]"
                        : "text-[rgba(0,0,0,0.54)]"
                    }`}
                  >
                    {conversation.users[1].name}
                  </p>

                  <p
                    className={`con-lastMessage lg:text-sm  ${
                      darkMode
                        ? "dark:text-[#8F9DB2]"
                        : "text-[rgba(0,0,0,0.54)]"
                    }`}
                  >
                    No previous Messages, click here to start a new chat
                  </p>
                  {/* <p className={"con-timeStamp" + (lightTheme ? "" : " dark")}>
                {conversation.timeStamp}
              </p> */}
                </motion.div>
              </div>
            );
          } else {
            return (
              <motion.div
                key={index}
                className="conversation-container"
                onClick={() => {
                  navigate(
                    "chat/" +
                      conversation._id +
                      "&" +
                      conversation.users[1].name
                  );
                }}
              >
                <p
                  className={`con-icon lg:[grid-area:1/1/3/2] lg:flex lg:justify-center lg:items-center  lg:font-sans lg:text-4xl lg:font-bold  lg:h-11 lg:w-11 lg:p-1 lg:rounded-full lg:justify-self-center lg:self-center ${
                    darkMode
                      ? "dark:bg-white dark:text-[#38BDF8]"
                      : "lg:bg-[#d9d9d9] lg:text-white"
                  }`}
                >
                  {conversation.users[1].name[0]}
                </p>
                <p
                  className={`con-title lg:[grid-area:1/2/2/4] font-bold  ${
                    darkMode ? "dark:text-[#38BDF8]" : "text-[rgba(0,0,0,0.54)]"
                  }`}
                >
                  {conversation.users[1].name}
                </p>

                <p
                  className={`con-lastMessage lg:text-sm  ${
                    darkMode ? "dark:text-[#8F9DB2]" : "text-[rgba(0,0,0,0.54)]"
                  }`}
                >
                  {conversation.latestMessage.content}
                </p>
                {/* <p className={"con-timeStamp" + (lightTheme ? "" : " dark")}>
                {conversation.timeStamp}
              </p> */}
              </motion.div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Sidebar;
