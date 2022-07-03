import React, { FC } from 'react';
import { useFormikContext } from 'formik';

import {
  Wrapper,
  FormContent,
  BoxLogo,
  TitleLogo,
  Text,
  Input,
  BoxTextForgotPass,
  BoxInput,
  Scroll,
  KeyboardAvoiding,
} from './styles';

import { Button, Logo, HelperText } from '@components/';

type Props = {};

const Login: FC<Props> = () => {
  const { values, submitForm, errors, setFieldValue, touched } =
    useFormikContext<LoginForm>();

  return (
    <KeyboardAvoiding>
      <Scroll keyboardShouldPersistTaps="handled">
        <Wrapper>
          <BoxLogo>
            <Logo />
            <TitleLogo>My Pets</TitleLogo>
            <Text>Encontre um pet para adoção</Text>
          </BoxLogo>
          <FormContent>
            <BoxInput>
              <Input
                mode="outlined"
                label="E-mail"
                placeholder="E-mail"
                value={values.email}
                keyboardType="email-address"
                autoCorrect={false}
                onChangeText={(e: string) => setFieldValue('email', e)}
                autoCapitalize="none"
              />
              <HelperText
                show={!!touched.email && !!errors.email}
                message={errors.email}
              />
            </BoxInput>
            <BoxInput>
              <Input
                mode="outlined"
                label="Senha"
                placeholder="Senha"
                value={values.password}
                secureTextEntry
                onChangeText={(e) => setFieldValue('password', e)}
              />

              <HelperText
                show={!!touched.password && !!errors.password}
                message={errors?.password}
              />
            </BoxInput>
            <Button title="Login" onPress={submitForm} />
            <BoxTextForgotPass>
              <Text>Esqueceu a senha?</Text>
            </BoxTextForgotPass>
          </FormContent>
        </Wrapper>
      </Scroll>
    </KeyboardAvoiding>
  );
};

export default Login;
