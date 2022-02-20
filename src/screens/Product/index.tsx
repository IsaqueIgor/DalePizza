import React, { useState } from 'react';
import { Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';

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
  const [image, setImage] = useState('');

  const handleImagePicker = async () => {
    console.log('handleImagePicker');
    await ImagePicker.launchCamera({ mediaType: 'photo' }, (response) => {
      if (!response.didCancel && response.assets) {
        setImage(response.assets[0].uri ? response.assets[0].uri : '');
      }
    });
  };

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
        <Photo uri={image} />
        <PickImageButton
          title="Upload"
          type="secondary"
          onPress={handleImagePicker}
        />
      </Upload>
    </Container>
  );
};

export default Product;
