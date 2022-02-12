import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import Button from 'src/components/button';
import Input from 'src/components/input';

import { Content, GradientBackground, Title } from './styles';

const Signin = () => {
  return (
    <GradientBackground>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Content>
          <Title>Login</Title>
          <Input
            placeholder="E-mail"
            type="secondary"
            autoCorrect={false}
            autoCapitalize="none"
          />

          <Input placeholder="Password" type="secondary" secureTextEntry />

          <Button title="Sign in" type="secondary" />
        </Content>
      </KeyboardAvoidingView>
    </GradientBackground>
  );
};

export default Signin;
