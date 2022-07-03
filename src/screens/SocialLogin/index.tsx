import React, { FC, useEffect } from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { CLI_ID_GOOGLE } from '../../helper';

import SocialLogin from './SocialLogin';

type Props = {};

const SocialLoginContainer: FC<Props> = () => {
  const handleGoogleButon = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.warn('userInfo', userInfo);
    } catch (error) {
      console.warn('erro', error);
    }
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: CLI_ID_GOOGLE,
    });
  }, []);

  return <SocialLogin handleGoogleButon={handleGoogleButon} />;
};

export default SocialLoginContainer;
