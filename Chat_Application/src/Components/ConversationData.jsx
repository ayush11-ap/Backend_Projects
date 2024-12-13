import React from "react";
import { useNavigate } from "react-router-dom";

const ConversationData = ({ props }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("chat");
      }}
      className="conversation-container lg:grid lg:grid-cols-[32px_auto_auto] lg:grid-rows-[auto_auto] lg:gap-x-2.5 lg:p-1.25 lg:my-4 lg:mx-3 lg:rounded-[20px] hover:bg-[#d9d9d9] active:bg-white duration-500"
    >
      <p className="con-icon lg:[grid-area:1/1/3/2] lg:flex lg:justify-center lg:items-center lg:bg-[#d9d9d9] lg:font-sans lg:text-4xl lg:font-bold lg:text-white lg:h-11 lg:w-11 lg:p-1 lg:rounded-full lg:justify-self-center lg:self-center">
        {props.name[0]}
      </p>
      <p className="con-title lg:[grid-area:1/2/2/4] font-bold text-[rgba(0,0,0,0.54)]">
        {props.name}
      </p>
      <p className="con-lastMessage lg:text-sm text-[rgba(0,0,0,0.54)]">
        {props.lastMessage}
      </p>
      <p className="con-timeStamp lg:text-sm text-[rgba(0,0,0,0.54)]">
        {props.timeStamp}
      </p>
    </div>
  );
};

export default ConversationData;
