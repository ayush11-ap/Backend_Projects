import React from "react";
import DoneOutlineOutlinedIcon from "@mui/icons-material/DoneOutlineOutlined";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateGroups = () => {
  const darkMode = useSelector((state) => state.themeKey); // Redux state for theme
  // Apply theme to the entire app
  if (darkMode) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
  //backend logic
  const userData = JSON.parse(localStorage.getItem("userData"));
  console.log("Data from LocalStorage : ", userData);
  const nav = useNavigate();
  if (!userData) {
    console.log("User not Authenticated");
    nav("/");
  }
  const user = userData.data;
  const [groupName, setGroupName] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log("User Data from CreateGroups : ", userData);

  const createGroup = () => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    axios.post(
      "http://localhost:8080/chat/createGroup",
      {
        name: groupName,
        users: '["647d94aea97e40a17278c7e5","647d999e4c3dd7ca9a2e6543"]',
      },
      config
    );
    nav("/app/groups");
  };
  return (
    <>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Do you want to create a Group Named " + groupName}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              This will create a group in which you will be the admin and other
              will be able to join this group.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button
              onClick={() => {
                createGroup();
                handleClose();
              }}
              autoFocus
            >
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <div
        className={`createGrp-cont lg:flex-[0.7] lg:self-center lg:px-5 lg:py-3 lg:m-3  lg:rounded-3xl lg:flex lg:justify-between  ${
          darkMode
            ? "dark:bg-[#1E293B] dark:border-[0.2px] dark:border-[#404872]"
            : "lg:bg-white shadow-[3px_4px_0px_0px_rgba(0,_0,_0,_0.1)]"
        }`}
      >
        <input
          type="text"
          placeholder="Enter Group Name"
          className={`search-box lg:outline-0 lg:w-full lg:px-2 lg:rounded-lg lg:outline-none lg:ml-2 lg:text-xl lg:font-sans lg:font-semibold  ${
            darkMode ? "dark:bg-[#1E293B] dark:text-white" : "lg:text-gray-600"
          }`}
          onChange={(e) => {
            setGroupName(e.target.value);
          }}
        />
        <IconButton
          onClick={() => {
            handleClickOpen();
          }}
        >
          <DoneOutlineOutlinedIcon className="icon dark:text-white" />
        </IconButton>
      </div>
    </>
  );
};

export default CreateGroups;
