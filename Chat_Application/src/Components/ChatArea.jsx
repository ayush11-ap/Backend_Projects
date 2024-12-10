import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

const ChatArea = ({ props }) => {
  return (
    <div className="lg:flex-[0.7] lg:flex lg:flex-col">
      <div className="chat-header lg:flex lg:items-center lg:gap-3 lg:bg-white lg:p-3 lg:m-3 lg:rounded-3xl">
        <p className="con-icon lg:[grid-area:1/1/3/2] lg:flex lg:justify-center lg:items-center lg:bg-[#d9d9d9] lg:font-sans lg:text-4xl lg:font-bold lg:text-white lg:h-11 lg:w-11 lg:p-1 lg:rounded-full lg:justify-self-center lg:self-center">
          {props.name[0]}
        </p>
        <div className="header-text lg:flex lg:flex-col lg:justify-center lg:flex-1">
          <p className="con-title lg:[grid-area:1/2/2/4] font-bold text-[rgba(0,0,0,0.54)]">
            {props.name}
          </p>
          <p className="con-timeStamp lg:text-sm text-[rgba(0,0,0,0.54)]">
            {props.timeStamp}
          </p>
        </div>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </div>
      <div className="msg-container lg:flex-1 lg:bg-red-300">
        Chatarea-container
      </div>
      <div className="inp-area lg:bg-red-500">Chatarea-inputbox</div>
    </div>
  );
};

export default ChatArea;
