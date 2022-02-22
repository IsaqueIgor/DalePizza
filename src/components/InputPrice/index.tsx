import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, Size, Label, Input } from './styles';

type Props = TextInputProps & {
  size: string;
};

const InputPrice = ({ size, ...rest }: Props) => {
  return (
    <Container>
      <Size>
        <Label>{size}</Label>
      </Size>

      <Label>R$</Label>

      <Input keyboardType="numeric" {...rest} />
    </Container>
  );
};

export default InputPrice;