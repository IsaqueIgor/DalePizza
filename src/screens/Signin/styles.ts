import styled, { css } from 'styled-components/native'
import { LinearGradient } from 'react-native-linear-gradient'
import { View } from 'react-native';

export const GradientBackground = styled.View`
  flex: 1;
  justify-content: center;

  ${({ theme }) => css`
		background-color: ${theme.COLORS.PRIMARY_900};
	`}
`;
