import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';

import {
  Container,
  Content,
  Image,
  Details,
  Name,
  Identification,
  Description,
  Line,
} from './styles';

export type ProductProps = {
  id: string;
  photo_url: string;
  name: string;
  description: string;
};

type Props = RectButtonProps & {
  data: ProductProps;
};

export function ProductCard({ data, ...rest }: Props) {
  const { COLORS } = useTheme();

  return (
    <Container>
      <Content {...rest}>
        <Image source={{ uri: data.photo_url }} />

        <Details>
          <Identification>
            <Name>{data.name}</Name>
          </Identification>

          <Description>{data.description}</Description>
        </Details>
      </Content>

      <Line />
    </Container>
  );
}
