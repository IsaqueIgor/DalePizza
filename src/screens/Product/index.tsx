import React, { useState } from 'react';
import { Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Container, Header, Title, DeleteLabel } from './styles';

const Product = () => {
  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Header>
        <Title>Register</Title>
        <TouchableOpacity>
          <DeleteLabel>Remove</DeleteLabel>
        </TouchableOpacity>
      </Header>
    </Container>
  );
};

export default Product;
