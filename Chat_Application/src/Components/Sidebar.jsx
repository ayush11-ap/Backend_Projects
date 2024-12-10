import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ConversationData from "./ConversationData";

const Sidebar = () => {
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
    <div className="sidebar-container border-2 border-green-200 lg:flex lg:flex-[0.3] lg:flex-col">
      <div className="sb-header lg:bg-white lg:rounded-2xl lg:py-3 lg:px-1 lg:m-2 lg:flex lg:justify-between">
        <div>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </div>
        <div>
          <IconButton>
            <PersonAddIcon />
          </IconButton>
          <IconButton>
            <GroupAddIcon />
          </IconButton>
          <IconButton>
            <AddBoxIcon />
          </IconButton>
          <IconButton>
            <DarkModeIcon />
          </IconButton>
        </div>
      </div>
      <div className="sb-search lg:bg-white lg:rounded-2xl lg:py-1 lg:px-1 lg:m-2 lg:flex lg:items-center">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input
          type="text"
          placeholder="Search"
          className="lg:outline-0 lg:outline-none lg:ml-2 lg:text-lg lg:font-sans lg:font-semibold lg:text-gray-600"
        />
      </div>
      <div className="sb-conversations lg:bg-white lg:rounded-2xl lg:py-4 lg:px-5 lg:m-2 lg:flex-1">
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
