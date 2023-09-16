import { Button, ButtonProps } from "@mui/material";
import { FC } from "react";

type Props = ButtonProps & {
  title: string;
};

export const BasicButton: FC<Props> = ({ ...props }) => {
  const { title, onClick } = props;
  return (
    <Button variant='contained' onClick={onClick} color='secondary' sx={{ color: "white", fontWeight: 700 }} {...props}>
      {title}
    </Button>
  );
};
