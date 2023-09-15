import { WordTags, baseApi } from "../baseApi";

type Word = {
  id: number;
  title: string;
  definition: string;
  example?: string;
};

type ListWordsResponse = Word[];

type CreateWordResponse = Word;

type CreateWordParams = {
  title: string;
  definition: string;
};

export const wordsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    listWords: builder.query<ListWordsResponse, void>({
      query: () => ({
        url: "words",
        method: "GET",
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
