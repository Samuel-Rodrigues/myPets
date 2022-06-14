import React, { useEffect } from 'react';
import theme from './src/global/styles/theme';
import SplashScreen from 'react-native-splash-screen';
import { ThemeProvider } from 'styled-components';

import { AuthProvider } from './src/hooks/auth';

import { SocialLogin } from '@screens/';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <SocialLogin />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
