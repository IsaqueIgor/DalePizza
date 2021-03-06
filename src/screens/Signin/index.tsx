import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import { useAuth } from 'hooks/auth';

import Button from 'components/Button';
import Input from 'components/Input';

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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { isLogging, signIn, forgotPassword } = useAuth();

  const handleSignIn = () => {
    console.log('handleSignIn');
    signIn(email, password);
  };

  const handleForgotPassword = () => {
    console.log('handleForgotPassword');
    forgotPassword(email);
  };

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
            onChangeText={setEmail}
          />

          <Input
            placeholder="Password"
            type="secondary"
            secureTextEntry
            onChangeText={setPassword}
          />

          <ForgotPasswordButton onPress={handleForgotPassword}>
            <ForgorPasswordLabel>Forgot Password?</ForgorPasswordLabel>
          </ForgotPasswordButton>

          <Button
            isLoading={isLogging}
            title="Sign in"
            type="secondary"
            onPress={handleSignIn}
          />
        </Content>
      </KeyboardAvoidingView>
    </GradientBackground>
  );
};

export default Signin;
