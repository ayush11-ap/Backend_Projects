import React, { useState } from "react";
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

const Sidebar = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [dark, setDark] = useState(true);
  // const lightTheme = useSelector((state) => state.themeKey);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  const [conversations, setConversations] = useState([
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
    <div className="sidebar-container lg:flex lg:flex-[0.3] lg:flex-col">
      <div className="sb-header lg:bg-white dark:bg-blue-900  lg:rounded-2xl lg:py-3 lg:px-1 lg:m-2 lg:flex lg:justify-between shadow-[-3px_3px_0px_0px_rgba(0,_0,_0,_0.1)]">
        <div>
          <IconButton>
            <AccountCircleIcon className="account-icon dark:text-white" />
          </IconButton>
        </div>
        <div>
          <IconButton
            onClick={() => {
              navigate("users");
            }}
          >
            <PersonAddIcon className="icon" />
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("groups");
            }}
          >
            <GroupAddIcon className="icon" />
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("createGroups");
            }}
          >
            <AddBoxIcon className="icon" />
          </IconButton>
          <IconButton onClick={() => darkModeHandler()}>
            {dark && <DarkModeIcon className="icon" />}
            {!dark && <LightModeIcon className="icon" />}
          </IconButton>
        </div>
      </div>
      <div className="sb-search lg:bg-white lg:rounded-2xl lg:py-1 lg:px-1 lg:m-2 lg:flex lg:items-center shadow-[-4px_4px_0px_0px_rgba(0,_0,_0,_0.1)]">
        <IconButton>
          <SearchIcon className="icon" />
        </IconButton>
        <input
          type="text"
          placeholder="Search"
          className="lg:outline-0 lg:outline-none lg:ml-2 lg:text-lg lg:font-sans lg:font-semibold lg:text-gray-600 "
        />
      </div>
      <div className="sb-conversations lg:bg-white lg:rounded-2xl lg:py-4 lg:px-5 lg:m-2 lg:flex-1 shadow-[-4px_4px_0px_0px_rgba(0,_0,_0,_0.1)]">
        {conversations.map((conversation) => {
          return (
            <ConversationData key={conversation.id} props={conversation} />
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
