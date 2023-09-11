import { AbcRounded, CreateRounded, ImportContactsRounded, LibraryBooksRounded } from "@mui/icons-material";
import { Avatar, List, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { BasicBox } from "../molecules/basicBox/basicBox";
import { AppBar } from "../organisms/appBar/appBar";

export const Home: FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <AppBar />
      <BasicBox>
        <List>
          <ListItemButton onClick={() => navigate("/blogs")}>
            <ListItemAvatar>
              <Avatar>
                <ImportContactsRounded />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>Friend's Blog</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemAvatar>
              <Avatar>
                <CreateRounded />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>Write a Blog</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemAvatar>
              <Avatar>
                <LibraryBooksRounded />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>Check My Blogs</ListItemText>
          </ListItemButton>
          <ListItemButton onClick={() => navigate("/words")}>
            <ListItemAvatar>
              <Avatar>
                <AbcRounded />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>Words</ListItemText>
          </ListItemButton>
        </List>
      </BasicBox>
    </>
  );
};
