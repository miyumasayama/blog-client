import { WordReducer, reset, setWordPage } from "../../../reducers/word";

describe("WordReducerのテスト", () => {
  test("初期状態", () => {
    expect(WordReducer(undefined, { type: undefined })).toEqual({
      page: 1,
    });
  });
  test("reset", () => {
    expect(WordReducer({ page: 2 }, reset())).toEqual({
      page: 1,
    });
  });
  test("setWordPage", () => {
    expect(WordReducer({ page: 1 }, setWordPage(2))).toEqual({
      page: 2,
    });
  });
});
