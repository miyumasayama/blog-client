import { FC } from "react";
import { BasicBox } from "../molecules/basicBox/basicBox";
import { AppBar } from "../organisms/appBar/appBar";

export const Words: FC = () => {
  return (
    <>
      <AppBar />
      <BasicBox>wordlist</BasicBox>
    </>
  );
};
