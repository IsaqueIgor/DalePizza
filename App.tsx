import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components/native';

import theme from './src/theme';

import Signin from 'screens/Signin';
import { AuthProvider } from 'hooks/auth';

import { Platform, StatusBar } from 'react-native';
import Product from 'screens/Product';

const App = () => {
  const setStatusBarContentShowing = (): void => {
    StatusBar.setBarStyle('light-content');
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(theme.COLORS.PRIMARY_900);
      StatusBar.setTranslucent(true);
    }
  };

  useEffect(
    React.useCallback(() => {
      setStatusBarContentShowing();
    }, [])
  );

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Product />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
