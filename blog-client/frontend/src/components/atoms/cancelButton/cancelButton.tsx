import { Button, ButtonProps } from "@mui/material";
import { FC } from "react";

export const CancelButton: FC<ButtonProps> = (props) => {
  return (
    <Button color='secondary' sx={{ fontWeight: 700 }} {...props}>
      Cancel
    </Button>
  );
};
