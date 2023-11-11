import { AuthReducer, removeToken, setToken } from "../../../reducers/auth";

describe("AuthReducerのテスト", () => {
  test("初期状態", () => {
    expect(AuthReducer(undefined, { type: undefined })).toEqual({
      token: undefined,
    });
  });
  test("setToken", () => {
    expect(AuthReducer(undefined, setToken("token"))).toEqual({
      token: "token",
    });
  });
  test("removeToken", () => {
    expect(AuthReducer(undefined, removeToken())).toEqual({});
  });
});
