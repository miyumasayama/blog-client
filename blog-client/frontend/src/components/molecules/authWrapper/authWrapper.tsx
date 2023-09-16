import { Paper } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import { FullHeightBox } from "../fullHeightBox/fullHeightBox";

export const AuthWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <FullHeightBox>
      <Paper sx={{ width: "400px", p: 4 }} elevation={4}>
        {children}
      </Paper>
    </FullHeightBox>
  );
};
