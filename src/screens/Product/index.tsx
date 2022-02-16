import React, { useState } from 'react';
import { Platform } from 'react-native';

import { Container } from './styles';

const Product = () => {
  return (
    <Container
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    ></Container>
  );
};

export default Product;
