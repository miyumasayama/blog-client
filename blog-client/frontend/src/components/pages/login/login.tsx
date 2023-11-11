import { yupResolver } from "@hookform/resolvers/yup";
import { Link, Stack, TextField, Typography } from "@mui/material";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";
import { object, string } from "yup";
import { useAuth } from "../../../hooks/useAuth";
import { BasicButton } from "../../atoms/basicButton/basicButton";
import { AuthWrapper } from "../../molecules/authWrapper/authWrapper";

export const schema = object({
  email: string().required("メールアドレスを入力してください。"),
  // .email("メールアドレスを正しい形式で入力してください。"),
  password: string().required("パスワードを入力してください。"),
});

type FormData = {
  email: string;
  password: string;
};

export const Login: FC = () => {
  const { login } = useAuth();
  const { control, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const handleLogin = async (data: FormData) => {
    void login(data);
  };
  return (
    <AuthWrapper>
      <Stack gap={3} component='form' onSubmit={handleSubmit(handleLogin)}>
        <Typography variant='h4' color='gray'>
          Login
        </Typography>
        <Controller
          name='email'
          control={control}
          render={({ field }) => (
            <TextField {...field} color='secondary' label='email' type='email' inputMode='email' required />
          )}
        />
        <Controller
          name='password'
          control={control}
          render={({ field }) => <TextField {...field} color='secondary' label='password' type='password' required />}
        />
        <BasicButton type='submit' title='LOGIN' />
        <Link component={RouterLink} to='/signup' color='secondary' textAlign='center' display='block'>
          create an account
        </Link>
      </Stack>
    </AuthWrapper>
  );
};
