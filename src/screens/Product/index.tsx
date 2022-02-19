import React, { useState } from 'react';
import { Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ButtonBack from 'src/components/ButtonBack';
import Photo from 'src/components/Photo';

import { Container, Header, Title, DeleteLabel } from './styles';

const Product = () => {
  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Header>
        <ButtonBack />
        <Title>Register</Title>
        <TouchableOpacity>
          <DeleteLabel>Remove</DeleteLabel>
        </TouchableOpacity>
      </Header>

      <Photo uri={''} />
    </Container>
  );
};

export default Product;
