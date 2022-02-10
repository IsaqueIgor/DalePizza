import React from 'react';
import Input from '../../components/input';
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
    </GradientBackground>
  );
};

export default Signin;
