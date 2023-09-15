import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export enum WordTags {
  ListWord = "list_word",
}

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8080/api/",
  }),
  tagTypes: [WordTags.ListWord],
  endpoints: () => ({}),
});
