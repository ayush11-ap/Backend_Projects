import React from "react";

const MessageOthers = () => {
  return (
    <div className="other-msg-container">
      <div className="conversation-container lg:grid lg:grid-cols-[34px_auto_auto] lg:grid-rows-[auto_auto] lg:gap-x-2.5 lg:p-1.25 lg:my-4 lg:mx-3 lg:rounded-[20px]">
        <p className="con-icon lg:[grid-area:1/1/3/2] lg:flex lg:justify-center lg:items-center lg:bg-[#d9d9d9] lg:font-sans lg:text-4xl lg:font-bold lg:text-white lg:h-11 lg:w-11 lg:p-1 lg:rounded-full lg:justify-self-center lg:self-center">
          O
        </p>
        <div className="other-txt-content lg:min-w-40 lg:bg-[#d9d9d9] lg:px-3 lg:py-3 lg:m-3 lg:rounded-3xl lg:mt-3 lg:flex lg:flex-col">
          <p className="con-title lg:[grid-area:1/2/2/4] font-bold text-[rgba(0,0,0,0.54)]">
            Other User
          </p>
          <p className="con-lastMessage lg:text-sm text-[rgba(0,0,0,0.54)] lg:mt-1">
            Hii! This is a sample misal lorem30
          </p>
          <p className="con-lastMessage lg:text-sm text-[rgba(0,0,0,0.54)] lg:self-end lg:mt-2">
            9:03 am
          </p>
        </div>
      </div>
    </div>
  );
};

export default MessageOthers;
