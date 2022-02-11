import React from 'react';
import Button from 'src/components/button';
import Input from 'src/components/input';
import { GradientBackground } from './styles';

const Signin = () => {
  return (
    <GradientBackground>
      <Input
        placeholder="E-mail"
        type="secondary"
        autoCorrect={false}
        autoCapitalize="none"
      />

      <Input placeholder="Password" type="secondary" secureTextEntry />

      <Button title="Sign in" type="secondary" />
    </GradientBackground>
  );
};

export default Signin;
