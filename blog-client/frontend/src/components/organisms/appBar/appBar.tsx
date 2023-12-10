import { AccountCircle } from "@mui/icons-material";
import { Button, IconButton, AppBar as MuiAppBar, Toolbar } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../../../reducers/appApis";
import { removeToken } from "../../../reducers/auth";
import { useAppDispatch } from "../../../store";
export const AppBar: FC = () => {
  const navigate = useNavigate();
  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();
  const handleLogout = async () => {
    const res = await logout();
    dispatch(removeToken());
    console.log(res);
  };
  return (
    <MuiAppBar position='static'>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button sx={{ color: "rgba(0, 0, 0, 0.50)" }} onClick={() => navigate("/")}>
          English Blogs
        </Button>
        <IconButton>
          <AccountCircle />
        </IconButton>
        <Button onClick={() => handleLogout()} sx={{ color: "black" }}>
          Logout
        </Button>
      </Toolbar>
    </MuiAppBar>
  );
};
