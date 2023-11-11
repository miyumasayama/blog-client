import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation, useRegisterMutation } from "../reducers/appApis";
import { setToken } from "../reducers/auth";
import { useAppDispatch } from "../store";
import { Auth } from "../types/auth";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [signUp] = useRegisterMutation();
  const [signIn] = useLoginMutation();
  const [isFailed, setIsFailed] = useState(false);
  const register = async (authData: Auth) => {
    setIsFailed(false);
    try {
      const res = await signUp({ ...authData }).unwrap();
      if (res.token) {
        dispatch(setToken(res.token));
        navigate("/");
      }
    } catch (e) {
      console.log(e);
      setIsFailed(true);
    }
  };

  const login = async (authData: Auth) => {
    setIsFailed(false);
    try {
      const res = await signIn({ ...authData }).unwrap();
      if (res.token) {
        dispatch(setToken(res.token));
        navigate("/");
      }
    } catch (e) {
      console.log(e);
      setIsFailed(true);
    }
  };

  return {
    register,
    login,
    isFailed,
  };
};
