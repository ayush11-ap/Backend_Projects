import React from "react";

const MessageSelf = () => {
  return (
    <div className="self-msg-container lg:flex lg:justify-end">
      <div className="msgBox lg:flex lg:flex-col lg:bg-emerald-200 lg:min-w-96 lg:px-4 lg:py-3 lg:m-2 lg:rounded-3xl">
        <p>This is sample misal pav</p>
        <p className="self.timeStamp lg:text-sm text-[rgba(0,0,0,0.54)] lg:self-end lg:font-light">
          9:03 am
        </p>
      </div>
    </div>
  );
};

export default MessageSelf;
