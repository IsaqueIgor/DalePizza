import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import theme from 'src/theme';

import { Signin } from 'screens/Signin';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Signin />
    </ThemeProvider>
  );
};

export default App;
