import React, { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { useUserContext } from "../../context/UserContext";
import toast from "react-hot-toast";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  p: 4,
};

export default function PhoneModal({ open, handleClose }) {
  const {
    phoneNumbers,
    setPhoneNumbers,
    phoneInfo,
    setPhoneInfo,
    create,
    setCreate,
    selectedId,
  } = useUserContext();

  const handleSave = async () => {
    if (create) {
      axios
        .post("/api/users/insertPhoneNumber", {
          number: phoneInfo,
        })
        .then((res) => {
          console.log(res.data);
          setPhoneNumbers([...phoneNumbers, res.data]);
          //
          handleClose();
        })
        .catch((err) => toast.error(err.response.data));
    } else {
      console.log(selectedId, phoneInfo);
      axios
        .put(`/api/users/updatePhoneNumber/${selectedId}`, {
          number: phoneInfo,
        })
        .then((res) => {
          console.log(res);
          let result = res.data;
          console.log(result);
          if (result.success) {
            let index = phoneNumbers.findIndex((n) => n._id == selectedId);
            phoneNumbers[index].number = phoneInfo;
            setPhoneNumbers([...phoneNumbers]);
            handleClose();
          }
        })
        .catch((err) => toast.error(err.response));
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <IconButton
              aria-label="delete"
              style={{ color: "white" }}
              onClick={handleClose}
            >
              <CloseIcon style={{ fontSize: "28px" }} />
            </IconButton>
          </Typography>

          <div className="flex justify-center mt-4">
            <span className="self-center mr-5">Phone Number : </span>
            <TextField
              id="standard-basic"
              variant="standard"
              value={phoneInfo}
              onChange={(e) => setPhoneInfo(e.target.value)}
            />
          </div>

          <div className="flex justify-end mt-[3rem] mb-[1rem]">
            <Button
              variant="contained"
              color="success"
              style={{ marginRight: "8px" }}
              onClick={handleSave}
            >
              Save
            </Button>
            <Button variant="contained" color="error" onClick={handleClose}>
              Cancel
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
