import { yupResolver } from "@hookform/resolvers/yup";
import { Link, Stack, TextField, Typography } from "@mui/material";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";
import { object, ref, string } from "yup";
import { BasicButton } from "../atoms/basicButton/basicButton";
import { AuthWrapper } from "../molecules/authWrapper/authWrapper";

export const schema = object({
  email: string()
    .required("メールアドレスを入力してください。")
    .email("メールアドレスを正しい形式で入力してください。"),
  password: string().required("パスワードを入力してください。"),
  rePassword: string()
    .oneOf([ref("password")], "パスワードが一致していません。もう一度入力してください。")
    .required(),
});

type FormData = {
  email: string;
  password: string;
  rePassword: string;
};

export const SignUp: FC = () => {
  const { control } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  return (
    <AuthWrapper>
      <Stack gap={3} component='form'>
        <Typography variant='h4' color='gray'>
          Sign Up
        </Typography>
        <Controller
          name='email'
          control={control}
          render={({ field }) => (
            <TextField color='secondary' label='email' type='email' inputMode='email' required {...field} />
          )}
        />
        <Controller
          name='password'
          control={control}
          render={({ field }) => <TextField color='secondary' label='password' type='password' required {...field} />}
        />
        <Controller
          name='rePassword'
          control={control}
          render={({ field }) => (
            <TextField color='secondary' label='password confirmation' type='password' required {...field} />
          )}
        />
        <BasicButton title='SIGN UP' type='submit' />
        <Link component={RouterLink} to='/login' color='secondary' textAlign='center' display='block'>
          already have an account?
        </Link>
      </Stack>
    </AuthWrapper>
  );
};
