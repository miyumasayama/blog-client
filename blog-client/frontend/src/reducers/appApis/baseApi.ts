import { BaseQueryFn, FetchArgs, FetchBaseQueryError, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../../store";
import { baseUrl } from "../../utils/const";
import { selectToken } from "../auth/selectors";

export enum WordTags {
  ListWord = "list_word",
}

const baseQuery = fetchBaseQuery({
  baseUrl: baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const token = selectToken(getState() as RootState);
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
  paramsSerializer: (params) => {
    return Object.keys(params)
      .filter((k) => {
        if (typeof params[k] === "number" && params[k] >= 0) return true;
        return params[k];
      })
      .flatMap((k) => {
        if (params[k] instanceof Array) {
          return params[k].map((v: string) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`);
        }
        return `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`;
      })
      .join("&");
  },
});

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  let result = await baseQuery(args, api, extraOptions);
  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: [WordTags.ListWord],
  endpoints: () => ({}),
});
