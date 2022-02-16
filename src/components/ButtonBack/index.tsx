import React from 'react';
import { TextInputProps } from 'react-native';
import { Container, BackIcon } from './styles';
import { RectButtonProps } from 'react-native-gesture-handler';

import leftArrow from 'assets/icons/left-arrow.png';

const ButtonBack = ({ ...rest }: RectButtonProps) => {
  return (
    <Container {...rest}>
      <BackIcon source={leftArrow} />
    </Container>
  );
};

export default ButtonBack;
