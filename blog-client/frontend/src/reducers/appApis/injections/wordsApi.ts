import { baseApi } from "../baseApi";

type ListWordsResponse = {
  post: {
    id: number;
    title: string;
    content: string;
  }[];
};

export const wordsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    listWords: builder.query<ListWordsResponse, void>({
      query: () => ({
        url: "words",
        method: "GET",
      }),
    }),
  }),
});

export const { useListWordsQuery } = wordsApi;
