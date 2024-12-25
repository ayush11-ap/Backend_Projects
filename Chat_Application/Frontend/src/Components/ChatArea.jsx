import React, { useContext, useRef, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { IconButton } from "@mui/material";
import MessageOthers from "./MessageOthers";
import MessageSelf from "./MessageSelf";
import { useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";

const ChatArea = ({ props }) => {
  const darkMode = useSelector((state) => state.themeKey);
  const [messageContent, setMessageContent] = useState("");
  const messagesEndRef = useRef(null);
  const dyParams = useParams();
  const [chat_id, chat_user] = dyParams._id.split("&");
  console.log(chat_id, chat_user);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [allMessages, setAllMessages] = useState([]);
  console.log("Chat area id : ", chat_id._id);
  // const refresh = useSelector((state) => state.refreshKey);
  const { refresh, setRefresh } = useContext(myContext);
  const [loaded, setloaded] = useState(false);

  // Apply theme to the entire app
  if (darkMode) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  const sendMessage = () => {
    // console.log("SendMessage Fired to", chat_id._id);
    const config = {
      headers: {
        Authorization: `Bearer ${userData.data.token}`,
      },
    };
    axios
      .post(
        "http://localhost:8080/message/",
        {
          content: messageContent,
          chatId: chat_id,
        },
        config
      )
      .then(({ data }) => {
        console.log("Message Fired");
      });
  };

  useEffect(() => {
    console.log("Users refreshed");
    const config = {
      headers: {
        Authorization: `Bearer ${userData.data.token}`,
      },
    };
    axios
      .get("http://localhost:8080/message/" + chat_id, config)
      .then(({ data }) => {
        setAllMessages(data);
        setloaded(true);
        // console.log("Data from Acess Chat API ", data);
      });
    // scrollToBottom();
  }, [refresh, chat_id, userData.data.token]);

  if (!loaded) {
    <h1>Loading....</h1>;
  } else {
    return (
      <div className="chat-cont lg:flex-[0.7] lg:flex lg:flex-col">
        <div
          className={`chat-header lg:flex lg:items-center lg:gap-3 lg:bg-white lg:p-3 lg:m-3 lg:rounded-3xl  ${
            darkMode
              ? "dark:bg-[#1E293B] dark:border-[0.2px] dark:border-[#404872] "
              : "shadow-[3px_3px_0px_0px_rgba(0,_0,_0,_0.1)]"
          }`}
        >
          <p
            className={`con-icon lg:[grid-area:1/1/3/2] lg:flex lg:justify-center lg:items-center  lg:font-sans lg:text-4xl lg:font-bold  lg:h-11 lg:w-11 lg:p-1 lg:rounded-full lg:justify-self-center lg:self-center ${
              darkMode
                ? "dark:bg-white dark:text-[#38BDF8]"
                : "lg:text-white lg:bg-[#d9d9d9]"
            }`}
          >
            {chat_user[0]}
          </p>
          <div className="header-text lg:flex lg:flex-col lg:justify-center lg:flex-1">
            <p
              className={`con-title lg:[grid-area:1/2/2/4] text-xl font-bold  ${
                darkMode ? "dark:text-[#38BDF8]" : "text-[rgba(0,0,0,0.54)]"
              } `}
            >
              {chat_user}
            </p>
            {/* <p
              className={`con-timeStamp lg:text-sm ${
                darkMode ? "dark:text-[#8F9DB2]" : "text-[rgba(0,0,0,0.54)] "
              }`}
            >
              Today
            </p> */}
          </div>
          <IconButton>
            <DeleteIcon className="icon dark:text-white" />
          </IconButton>
        </div>
        <div
          className={`msg-container lg:flex-1  lg:px-3 lg:py-3 lg:m-3 lg:rounded-xl lg:overflow-y-auto max-h-[65vh] overflow-y-auto
  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-slate-300
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 ${
    darkMode
      ? "dark:bg-[#1E293B] dark:border-[0.2px] dark:border-[#404872]"
      : "lg:bg-white"
  }`}
        >
          {allMessages
            .slice(0)
            .reverse()
            .map((msg, idx) => {
              const sender = msg.sender;
              const self_id = userData.data._id;
              if (sender._id === self_id) {
                return <MessageSelf props={msg} key={idx} />;
              } else {
                return <MessageOthers props={msg} key={idx} />;
              }
            })}
        </div>
        <div ref={messagesEndRef} className="BOTTOM" />
        <div
          className={`inp-area lg: lg:bg-white lg:px-3 lg:py-3 lg:m-3 lg:rounded-xl lg:flex lg:justify-center  ${
            darkMode
              ? "dark:bg-[#1E293B] dark:border-[0.2px] dark:border-[#404872]"
              : "shadow-[3px_3px_0px_0px_rgba(0,_0,_0,_0.1)]"
          }`}
        >
          <input
            type="text"
            placeholder="Type a Message"
            className={`lg:outline-0 lg:w-full lg:px-2 lg:rounded-lg lg:outline-none lg:ml-2 lg:text-lg lg:font-sans lg:font-semibold  ${
              darkMode
                ? "dark:bg-[#1E293B] dark:text-[#e5efff]"
                : "lg:text-gray-600"
            }`}
            value={messageContent}
            onChange={(e) => {
              setMessageContent(e.target.value);
            }}
            onKeyDown={(event) => {
              if (event.code == "Enter") {
                console.log(event);
                sendMessage();
                setMessageContent("");
                setRefresh(!refresh);
              }
            }}
          />
          <IconButton
            onClick={() => {
              sendMessage();
              setRefresh(!refresh);
            }}
          >
            <SendIcon className="icon dark:text-white" />
          </IconButton>
        </div>
      </div>
    );
  }
};

export default ChatArea;
