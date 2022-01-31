/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import theme from './src/global/styles/theme';

import {ThemeProvider} from 'styled-components';

import React from 'react';

import {Login, Home} from '@screens/';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  );
};

export default App;
