import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { IconButton } from "@mui/material";

const Sidebar = () => {
  return (
    <div className="sidebar-container border-2 border-green-200 lg:flex-[0.3] ">
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
      <div className="sb-search"></div>
      <div className="sb-conversations"></div>
    </div>
  );
};

export default Sidebar;
