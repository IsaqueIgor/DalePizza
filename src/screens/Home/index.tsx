import React, { useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { Alert, TouchableOpacity, FlatList } from 'react-native';
import { useTheme } from 'styled-components/native';
import { ProductProps } from 'src/components/ProductCard';

import { Container, Header, Greeting, GreetingText } from './styles';

const Home = () => {
  const [pizzas, setPizzas] = useState<ProductProps[]>([]);
  const [search, setSearch] = useState('');
  const { COLORS } = useTheme();

  return (
    <Container>
      <Header>
        <Greeting>
          <GreetingText>Olá, Admin</GreetingText>
        </Greeting>
      </Header>
    </Container>
  );
};

export default Home;
