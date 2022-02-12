import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import Button from 'src/components/button';
import Input from 'src/components/input';

import brandImg from 'assets/brand.png';

import {
  Content,
  GradientBackground,
  Title,
  Brand,
  ForgorPasswordLabel,
  ForgotPasswordButton,
} from './styles';

const Signin = () => {
  return (
    <GradientBackground>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Content>
          <Brand source={brandImg} />
          <Title>Login</Title>
          <Input
            placeholder="E-mail"
            type="secondary"
            autoCorrect={false}
            autoCapitalize="none"
          />

          <Input placeholder="Password" type="secondary" secureTextEntry />

          <ForgotPasswordButton>
            <ForgorPasswordLabel>Forgot Password?</ForgorPasswordLabel>
          </ForgotPasswordButton>
          <Button title="Sign in" type="secondary" />
        </Content>
      </KeyboardAvoidingView>
    </GradientBackground>
  );
};

export default Signin;
