import { AccountCircle } from "@mui/icons-material";
import { Button, IconButton, AppBar as MuiAppBar, Toolbar } from "@mui/material";
import { FC } from "react";
export const AppBar: FC = () => {
  return (
    <MuiAppBar>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button sx={{ color: "rgba(0, 0, 0, 0.50)" }}>English Blogs</Button>
        <IconButton>
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </MuiAppBar>
  );
};
