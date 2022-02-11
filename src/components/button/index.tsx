import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Container, Load, Title, TypeProps } from './styles';

type Props = RectButtonProps & {
  title: string;
  isLoading?: boolean;
  type?: TypeProps;
};

const Button = ({
  type = 'primary',
  title,
  isLoading = false,
  ...rest
}: Props) => {
  return (
    <Container enabled={!isLoading} type={type} {...rest}>
      {isLoading ? <Load /> : <Title>{title}</Title>}
    </Container>
  );
};

export default Button;
