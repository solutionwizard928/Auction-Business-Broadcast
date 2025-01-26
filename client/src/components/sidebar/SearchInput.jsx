import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import LogoutIcon from "@mui/icons-material/Logout";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import PhoneModal from "../profile/PhoneModal";
import { useUserContext } from "../../context/UserContext";

const SearchInput = () => {

  const {modalState, setModalState, setCreate, search, setSearch} = useUserContext();

  const [anchorEl, setAnchorEl] = useState(null);
 
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleSubmit = (e) => {};

  const handleClose = async () => {
    setAnchorEl(null);
  };

  const handleMenu = async (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = async () => {
    navigate("/");
  };

  const handleAdd = async () => {
    setCreate(true);
    setModalState(true);
  };

  const handleModalClose = () => {
    setModalState(false);
  }

  return (
    <>
      <div className="flex items-center">
        <IconButton
          id="btn_sidebar_menu"
          aria-label="delete"
          style={{ color: "white" }}
          onClick={handleMenu}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem
            onClick={handleLogout}
            style={{ fontSize: "14px", fontWeight: "700" }}
          >
            <LogoutIcon /> <span className="text-white ml-2"> logout</span>
          </MenuItem>
        </Menu>
        <TextField
          id="outlined-start-adornment"
          sx={{ m: 1, width: "24ch" }}
          style={{
            borderRadius: "88px",
            backgroundColor: "rgb(44, 44, 44)",
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyUp={handleSubmit}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon id="icon_menu_search" />
              </InputAdornment>
            ),
          }}
        />

        <Fab color="primary" size="small" aria-label="add" onClick={handleAdd}>
          <AddIcon />
        </Fab>
      </div>
      <PhoneModal
        open={modalState}
        handleClose={handleModalClose}
      />
    </>
  );
};
export default SearchInput;
