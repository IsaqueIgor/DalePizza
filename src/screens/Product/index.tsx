import React, { useState } from 'react';
import { Platform, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as ImagePicker from 'react-native-image-picker';

import { ButtonBack, Input, InputPrice, Photo, Button } from 'components/index';

import {
  Container,
  Header,
  Title,
  DeleteLabel,
  PickImageButton,
  Upload,
  Form,
  InputGroup,
  Label,
  InputGroupHeader,
  MaxCharacters,
} from './styles';

const Product = () => {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [priceSizeP, setPriceSizeP] = useState('');
  const [priceSizeM, setPriceSizeM] = useState('');
  const [priceSizeG, setPriceSizeG] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleImagePicker = async (): Promise<void> => {
    console.log('handleImagePicker');
    await ImagePicker.launchCamera({ mediaType: 'photo' }, (response) => {
      if (!response.didCancel && response.assets) {
        setImage(response.assets[0].uri ? response.assets[0].uri : '');
      }
    });
  };

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header>
          <ButtonBack />
          <Title>Register</Title>
          <TouchableOpacity>
            <DeleteLabel>Remove</DeleteLabel>
          </TouchableOpacity>
        </Header>

        <Upload>
          <Photo uri={image} />
          <PickImageButton
            title="Upload"
            type="secondary"
            onPress={handleImagePicker}
          />
        </Upload>

        <Form>
          <InputGroup>
            <Label>Nome</Label>
            <Input onChangeText={setName} value={name} />
          </InputGroup>

          <InputGroup>
            <InputGroupHeader>
              <Label>Descrição</Label>
              <MaxCharacters>0 de 60 caracteres</MaxCharacters>
            </InputGroupHeader>
            <Input
              multiline
              maxLength={60}
              style={{ height: 80 }}
              onChangeText={setDescription}
              value={description}
            />
          </InputGroup>

          <InputGroup>
            <Label>Tamanhos e preços</Label>
            <InputPrice
              size="P"
              onChangeText={setPriceSizeP}
              value={priceSizeP}
            />
            <InputPrice
              size="M"
              onChangeText={setPriceSizeM}
              value={priceSizeM}
            />
            <InputPrice
              size="G"
              onChangeText={setPriceSizeG}
              value={priceSizeG}
            />

            <Button title="Cadastrar Pizza" isLoading={isLoading} />
          </InputGroup>
        </Form>
      </ScrollView>
    </Container>
  );
};

export default Product;
