import styled, { css } from 'styled-components/native'
import {  getBottomSpace } from 'react-native-iphone-x-helper'

export const GradientBackground = styled.View`
  flex: 1;
  justify-content: center;

  ${({ theme }) => css`
		background-color: ${theme.COLORS.PRIMARY_900};
	`}
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace() + 48
  }
})`
  width: 100%;
  padding: 0 32px;
`
export const Title = styled.Text`
  font-size: 32px;
  margin-bottom:24px;
  align-self: flex-start;

  ${({ theme }) => css`
		font-family: ${theme.FONTS.TITLE};
		color: ${theme.COLORS.TITLE};
	`}

`
