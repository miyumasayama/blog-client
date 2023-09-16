import { SentimentDissatisfiedOutlined } from "@mui/icons-material";
import { Stack, SvgIcon, Typography } from "@mui/material";
import { FC } from "react";

export const NoResult: FC = () => {
  return (
    <Stack alignItems='center' gap={2}>
      <Typography color='lightgray' variant='h3'>
        Sorry, we found nothing
      </Typography>
      <SvgIcon sx={{ height: "100px", width: "100px", color: "lightgray" }}>
        <SentimentDissatisfiedOutlined />
      </SvgIcon>
    </Stack>
  );
};
