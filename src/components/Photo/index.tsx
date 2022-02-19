import React from 'react';

import { Image, Placeholder, PlaceholderTitle } from './styles';

type Props = {
  uri: string | null;
};

const Photo = ({ uri }: Props) => {
  if (uri) {
    return <Image source={{ uri }} />;
  }

  return (
    <Placeholder>
      <PlaceholderTitle>No photo</PlaceholderTitle>
    </Placeholder>
  );
};

export default Photo;
