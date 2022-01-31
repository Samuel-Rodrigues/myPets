import React, {FC} from 'react';
import {useFormikContext} from 'formik';
import {
  Wrapper,
  FormContent,
  BoxLogo,
  TitleLogo,
  SubTitleLogo,
  ForgotPass,
  Input,
} from './styles';

import {Button, Logo} from '@components/';

type Props = {};

const Login: FC<Props> = () => {
  const {values, submitForm, errors, setFieldValue, touched} =
    useFormikContext<LoginForm>();

  const handleLogin = () => {
    console.warn('fazer login');
  };
  return (
    <Wrapper>
      <BoxLogo>
        <Logo />
        <TitleLogo>My Pets</TitleLogo>
        <SubTitleLogo>Encontre um pet para adoção</SubTitleLogo>
      </BoxLogo>
      <FormContent>
        <Input
          label="E-mail"
          placeholder="E-mail"
          value={values.email}
          keyboardType="email-address"
          autoCorrect={false}
          onChangeText={(e: string) => setFieldValue('email', e)}
          helperText={!!touched.email ? errors?.email : ''}
          autoCapitalize="none"
        />
        <Input
          label="Senha"
          placeholder="Senha"
          value={values.password}
          secureTextEntry
          onChangeText={(e) => setFieldValue('password', e)}
          helperText={!!touched.password ? errors?.password : ''}
        />
        {/* <ButtonGoIn>
          <Typography>LOGIN</Typography>
        </ButtonGoIn> */}
        <Button title="Login" onPress={submitForm} />
      </FormContent>
      <ForgotPass>Esqueceu a senha?</ForgotPass>
    </Wrapper>
  );
};

export default Login;
