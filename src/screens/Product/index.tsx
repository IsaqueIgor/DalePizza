import React, { useState } from 'react';
import { Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ButtonBack from 'components/ButtonBack';
import Photo from 'components/Photo';

import {
  Container,
  Header,
  Title,
  DeleteLabel,
  PickImageButton,
  Upload,
} from './styles';

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

      <Upload>
        <Photo uri={''} />
        <PickImageButton title="Upload" type="secondary" />
      </Upload>
    </Container>
  );
};

export default Product;
