import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Fade from "@mui/material/Fade";

import { defaultAvatarPath } from "../../utils/urlPath";
import toast from "react-hot-toast";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import { useUserContext } from "../../context/UserContext";

const Conversation = ({ conversation }) => {
  const {
    modalState,
    setModalState,
    phoneNumbers,
    setPhoneNumbers,
    phoneInfo,
    setPhoneInfo,
    selectedId,
    setSelectedId
  } = useUserContext();

  const [anchorEl, setAnchorEl] = useState(null);
  const [isSelected, setIsSelected] = useState(false);

  const open = Boolean(anchorEl);

  const handleMenu = async (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = async () => {
    setAnchorEl(null);
  };

  const handleEdit = async (id) => {
    let phoneNumber = phoneNumbers.find((n) => n._id == id);
    setPhoneInfo(phoneNumber.number);
    setSelectedId(id);
    setModalState(true);
  };
  
  const handleDelete = async (id) => {
    console.log(id);
    axios
      .delete(`/api/users/deletePhoneNumber/${id}`)
      .then((res) => {
        let result = res.data;
        if (result.success) {
          // phoneNumbers.id
          setPhoneNumbers(phoneNumbers.filter((n) => n._id != result.id));
        }
      })
      .catch((err) => toast.error(err.response.data));
  };

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-[#494949] my-[0.1em] mx-[0.5em] py-3 rounded-lg cursor-pointer relative
				${isSelected ? "bg-[#8774e1]" : ""}`}
      >
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="text-lg text-gray-200 font-semibold flex items-center px-5">
              {conversation.number}
            </p>
            {
              <IconButton
                aria-label="delete"
                style={{ color: "white" }}
                onClick={handleMenu}
              >
                <MoreVertIcon />
              </IconButton>
            }
            {
              <Menu
                id="fade-menu"
                MenuListProps={{
                  "aria-labelledby": "fade-button",
                }}
                anchorEl={anchorEl}
                open={open}
                TransitionComponent={Fade}
                onClose={handleClose}
              >
                <MenuItem
                  style={{
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "white",
                  }}
                  onClick={() => handleEdit(conversation._id)}
                >
                  <EditIcon className="mr-2" /> Edit
                </MenuItem>
                <MenuItem
                  style={{
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "white",
                  }}
                  onClick={() => handleDelete(conversation._id)}
                >
                  <DeleteIcon className="mr-2" /> Delete
                </MenuItem>
              </Menu>
            }
            {/* <span className="indicator-item badge badge-secondary text-white bg-black rounded-md border-0 loading loading-dots loading-md"></span> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Conversation;
