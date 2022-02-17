import styled from 'styled-components';
import { font10 } from '@styles/fonts';

interface liProps {
  isChecked: boolean;
}

export const Tag = styled.li<liProps>`
  flex: 0 0 auto;
  ${font10(700)};
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.tag};
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: ${({ theme }) => `${theme.borderRadius.medium}px`};
  padding: ${({ theme }) => `${theme.gaps.base}px`};
  cursor: pointer;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  ${({ isChecked, theme }) =>
    isChecked &&
    `
			color: #fff;
			background: ${theme.colors.blue};
		`}
`;
