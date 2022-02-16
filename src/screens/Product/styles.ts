import styled, { css } from 'styled-components/native'
import {  getBottomSpace } from 'react-native-iphone-x-helper'

export const Container = styled.KeyboardAvoidingView`
  flex: 1;

  ${({ theme }) => css`
		background-color: ${theme.COLORS.BACKGROUND.};
	`}
`;
