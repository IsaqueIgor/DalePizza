import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '../hooks/auth';
import SignIn from 'src/screens/Signin';

export function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      <SignIn />
    </NavigationContainer>
  );
}
