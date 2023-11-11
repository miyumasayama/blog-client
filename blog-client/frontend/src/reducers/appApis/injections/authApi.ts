import { paths } from "../../../types/api";
import { baseApi } from "../baseApi";

type LoginParams = paths["/api/login"]["post"]["requestBody"]["content"]["application/json"];

type LoginResponse = paths["/api/login"]["post"]["responses"]["200"]["content"]["application/json"];

type LogoutParams = paths["/api/logout"]["delete"]["requestBody"]["content"]["application/json"];

type LogoutResponse = paths["/api/logout"]["delete"]["responses"]["200"]["content"]["application/json"];

type RegisterParams = paths["/api/register"]["post"]["requestBody"]["content"]["application/json"];

type RegisterResponse = paths["/api/register"]["post"]["responses"]["200"]["content"]["application/json"];

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
    logout: builder.mutation<LogoutResponse, LogoutParams>({
      query: (params) => ({
        url: "logout",
        method: "DELETE",
        body: {
          // userId: params.userId,
        },
      }),
    }),
    register: builder.mutation<RegisterResponse, RegisterParams>({
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

export const { useLoginMutation, useLogoutMutation, useRegisterMutation } = authApi;
