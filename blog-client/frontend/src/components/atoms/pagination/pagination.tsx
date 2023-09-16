import { Pagination as MuiPagination } from "@mui/material";
import { FC } from "react";

type Props = {
  page: number;
  maxPage: number;
  handleChange: (page: number) => void;
};

export const Pagination: FC<Props> = ({ page, handleChange, maxPage }) => {
  return (
    <MuiPagination
      color='tertiary'
      sx={{
        color: "white",
        fontWeight: 700,
      }}
      count={maxPage}
      page={page}
      onChange={(_, page) => handleChange(page)}
    />
  );
};
