import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { IconButton } from "@mui/material";
import MessageOthers from "./MessageOthers";
import MessageSelf from "./MessageSelf";

const ChatArea = ({ props }) => {
  return (
    <div className="lg:flex-[0.7] lg:flex lg:flex-col">
      <div className="chat-header lg:flex lg:items-center lg:gap-3 lg:bg-white lg:p-3 lg:m-3 lg:rounded-3xl shadow-[4px_4px_0px_0px_rgba(0,_0,_0,_0.3)]">
        <p className="con-icon lg:[grid-area:1/1/3/2] lg:flex lg:justify-center lg:items-center lg:bg-[#d9d9d9] lg:font-sans lg:text-4xl lg:font-bold lg:text-white lg:h-11 lg:w-11 lg:p-1 lg:rounded-full lg:justify-self-center lg:self-center">
          A
        </p>
        <div className="header-text lg:flex lg:flex-col lg:justify-center lg:flex-1">
          <p className="con-title lg:[grid-area:1/2/2/4] font-bold text-[rgba(0,0,0,0.54)]">
            Ayush
          </p>
          <p className="con-timeStamp lg:text-sm text-[rgba(0,0,0,0.54)]">
            Today
          </p>
        </div>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </div>
      <div
        className="msg-container lg:flex-1 lg:bg-white lg:px-3 lg:py-3 lg:m-3 lg:rounded-xl lg:overflow-y-auto   max-h-[65vh] overflow-y-auto
  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-slate-300
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
      >
        <MessageOthers />
        <MessageSelf />
        <MessageOthers />
        <MessageSelf />
        <MessageOthers />
        <MessageSelf />
      </div>
      <div className="inp-area lg: lg:bg-white lg:px-3 lg:py-3 lg:m-3 lg:rounded-xl lg:flex lg:justify-center shadow-[4px_4px_0px_0px_rgba(0,_0,_0,_0.3)]">
        <input
          type="text"
          placeholder="Search"
          className="lg:outline-0 lg:w-full lg:px-2 lg:rounded-lg lg:outline-none lg:ml-2 lg:text-lg lg:font-sans lg:font-semibold lg:text-gray-600"
        />
        <IconButton>
          <SendIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ChatArea;
