import styled, { css } from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: 1px solid ${({theme}) => theme.COLORS.PRIMARY_100}
`;

export const BackIcon = styled.Image.attrs({
  resizeMode: 'contain'
})`
  height: 18px;
`
