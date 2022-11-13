import { useState } from "react";
import {
  Box,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  IconButton,
  Typography,
  Tooltip,
} from "@mui/material";
import { useUserContext } from "../../hooks";
import { authentication } from "../../services";
import { useNavigate } from "react-router-dom";

export default function Account() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { name, email, profileImage, setUser } = useUserContext();
  const { logout } = authentication();
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar
              sx={{ width: 42, height: 42 }}
              src={profileImage}
              alt={name}
            />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Box>
            <Typography sx={{ fontSize: "1.6rem", fontWeight: 600 }}>
              {name}
            </Typography>
            <Typography sx={{ fontSize: "1.2rem" }}>{email}</Typography>
          </Box>
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={() =>
            logout(() => {
              setUser(null);
              navigate("/");
            })
          }
        >
          <Typography variant="span" fontSize={16}>
            Logout
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
}
