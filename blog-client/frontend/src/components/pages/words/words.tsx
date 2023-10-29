import { FC } from "react";
import { BasicBox } from "../../molecules/basicBox/basicBox";
import { AppBar } from "../../organisms/appBar/appBar";
import { WordList } from "./fragments/wordList";

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
