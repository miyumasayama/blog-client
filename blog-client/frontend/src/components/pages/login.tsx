import { yupResolver } from "@hookform/resolvers/yup";
import { Link, Stack, TextField, Typography } from "@mui/material";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";
import { object, string } from "yup";
import { BasicButton } from "../atoms/basicButton/basicButton";
import { AuthWrapper } from "../molecules/authWrapper/authWrapper";

export const schema = object({
  email: string()
    .required("メールアドレスを入力してください。")
    .email("メールアドレスを正しい形式で入力してください。"),
  password: string().required("パスワードを入力してください。"),
});

type FormData = {
  email: string;
  password: string;
};

export const Login: FC = () => {
  const { control } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  return (
    <AuthWrapper>
      <Stack gap={3} component='form'>
        <Typography variant='h4' color='gray'>
          Login
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
        <BasicButton title='LOGIN' type='submit' />

        <Link component={RouterLink} to='/signup' color='secondary' textAlign='center' display='block'>
          create an account
        </Link>
      </Stack>
    </AuthWrapper>
  );
};
