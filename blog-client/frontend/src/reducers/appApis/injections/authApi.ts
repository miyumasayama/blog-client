import { components } from "../../../types/api";
import { baseApi } from "../baseApi";

type LoginParams = components["schemas"]["authorizationRequestBody"];

type LoginResponse = components["schemas"]["tokenResponse"];

type RegisterParams = components["schemas"]["authorizationRequestBody"];

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginParams>({
      query: (params) => ({
        url: "login",
        method: "POST",
        body: {
          email: params.email,
          password: params.password,
        },
      }),
    }),
    register: builder.mutation<any, RegisterParams>({
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
