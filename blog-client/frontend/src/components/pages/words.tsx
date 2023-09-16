import { FC } from "react";
import { BasicBox } from "../molecules/basicBox/basicBox";
import { AppBar } from "../organisms/appBar/appBar";
import { WordList } from "../organisms/wordList/wordList";

export const Words: FC = () => {
  return (
    <>
      <AppBar />
      <BasicBox>
        <WordList />
      </BasicBox>
    </>
  );
};
