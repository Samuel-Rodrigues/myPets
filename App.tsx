import React, { useEffect } from 'react';
import theme from './src/global/styles/theme';
import SplashScreen from 'react-native-splash-screen';
import { ThemeProvider } from 'styled-components';

import { Login } from '@screens/';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  );
};

export default App;
