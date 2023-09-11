import { AccountCircle } from "@mui/icons-material";
import { Button, IconButton, AppBar as MuiAppBar, Toolbar } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
export const AppBar: FC = () => {
  const navigate = useNavigate();
  return (
    <MuiAppBar position='static'>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button sx={{ color: "rgba(0, 0, 0, 0.50)" }} onClick={() => navigate("/")}>
          English Blogs
        </Button>
        <IconButton>
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </MuiAppBar>
  );
};
