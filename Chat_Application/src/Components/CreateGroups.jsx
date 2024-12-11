import React from "react";
import DoneOutlineOutlinedIcon from "@mui/icons-material/DoneOutlineOutlined";
import { IconButton } from "@mui/material";

const CreateGroups = () => {
  return (
    <div className="createGrp-cont lg:flex-[0.7] lg:self-center lg:px-5 lg:py-3 lg:m-3 lg:bg-white lg:rounded-3xl lg:flex lg:justify-between">
      <input
        type="text"
        placeholder="Enter Group Name"
        className="search-box lg:outline-0 lg:w-full lg:px-2 lg:rounded-lg lg:outline-none lg:ml-2 lg:text-lg lg:font-sans lg:font-semibold lg:text-gray-600"
      />
      <IconButton>
        <DoneOutlineOutlinedIcon />
      </IconButton>
    </div>
  );
};

export default CreateGroups;
