import { WordTags, baseApi } from "../baseApi";

type Word = {
  id: number;
  title: string;
  definition: string;
  example?: string;
};

type ListWordsResponse = {
  data: Word[];
  total: number;
  last_page: number;
};

type ListWordsParams = {
  page: number;
  per_page: number;
};

type CreateWordResponse = Word;

type CreateWordParams = {
  title: string;
  definition: string;
};

export const wordsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    listWords: builder.query<ListWordsResponse, ListWordsParams>({
      query: (params) => ({
        url: "words",
        method: "GET",
        params: {
          page: params.page,
          per_page: params.per_page,
        },
      }),
      providesTags: [WordTags.ListWord],
    }),
    createWord: builder.mutation<CreateWordResponse, CreateWordParams>({
      query: (params) => ({
        url: "words",
        method: "POST",
        body: {
          title: params.title,
          definition: params.definition,
        },
      }),
      invalidatesTags: [WordTags.ListWord],
    }),
  }),
});

export const { useListWordsQuery, useCreateWordMutation } = wordsApi;
