import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ConversationData from "./ConversationData";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Features/themeSlice";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.themeKey);

  // Apply theme to the entire app
  if (darkMode) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  const [conversations] = React.useState([
    {
      name: "A@Y|_|$|-|",
      lastMessage: "Last Message #1",
      timeStamp: "today",
      id: 1,
    },
    {
      name: "Bundya",
      lastMessage: "Last Message #1",
      timeStamp: "today",
      id: 2,
    },
    {
      name: "Rodya",
      lastMessage: "Last Message #1",
      timeStamp: "today",
      id: 3,
    },
  ]);

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
          <IconButton>
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
              <DarkModeIcon className="icon dark:text-white" />
            ) : (
              <LightModeIcon className="icon " />
            )}
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
        {conversations.map((conversation) => (
          <ConversationData key={conversation.id} props={conversation} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
