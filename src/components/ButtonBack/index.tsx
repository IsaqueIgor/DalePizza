import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, BackIcon } from './styles';

import leftArrow from 'assets/icons/left-arrow.png';

const ButtonBack = ({ ...rest }: TouchableOpacityProps) => {
  return (
    <Container {...rest}>
      <BackIcon source={leftArrow} />
    </Container>
  );
};

export default ButtonBack;
