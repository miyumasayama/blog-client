import { paths } from "../../../types/api";
import { WordTags, baseApi } from "../baseApi";

type ListWordsResponse = paths["/api/words"]["get"]["responses"]["200"]["content"]["application/json"];
type ListWordsParams = paths["/api/words"]["get"]["parameters"]["query"];

type CreateWordResponse = paths["/api/words"]["post"]["responses"]["201"]["content"]["application/json"];
type CreateWordParams = paths["/api/words"]["post"]["requestBody"]["content"]["application/json"];

type UpdateWordResponse = paths["/api/words/{id}"]["put"]["responses"]["201"]["content"]["application/json"];
type UpdateWordParams = paths["/api/words/{id}"]["put"]["requestBody"]["content"]["application/json"];

export const wordsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    listWords: builder.query<ListWordsResponse, ListWordsParams>({
      query: (params) => ({
        url: "words",
        method: "GET",
        params: {
          offset: params?.offset,
          per_page: params?.per_page,
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
    updateWord: builder.mutation<UpdateWordResponse, { id: number; body: UpdateWordParams }>({
      query: (params) => ({
        url: `words/${params.id}`,
        method: "PUT",
        body: {
          title: params.body.title,
          definition: params.body.definition,
        },
      }),
    }),
  }),
});

export const { useListWordsQuery, useCreateWordMutation } = wordsApi;
