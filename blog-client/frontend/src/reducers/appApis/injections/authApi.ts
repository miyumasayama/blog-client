import { baseApi } from "../baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<any, any>({
      query: (params) => ({
        url: "login",
        method: "POST",
        body: {
          email: params.email,
          password: params.password,
        },
      }),
    }),
    register: builder.mutation<any, any>({
      query: (params) => ({
        url: "register",
        method: "POST",
        body: {
          email: params.email,
          password: params.password,
        },
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
