import React, { useState } from 'react';
import { Platform } from 'react-native';

import { Container, Header, Title } from './styles';

const Product = () => {
  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Header>
        <Title>Register</Title>
      </Header>
    </Container>
  );
};

export default Product;
