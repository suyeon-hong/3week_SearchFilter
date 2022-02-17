import styled from 'styled-components';
import { flexbox } from '@styles/commonStyles';
import { font18 } from '@styles/fonts';

export const Header = styled.header`
  ${flexbox({ jc: 'between' })};
  width: 100%;
  height: 50px;
  color: white;
  background-color: ${({ theme }) => theme.colors.header};
  border-radius: ${({ theme }) => `${theme.borderRadius.medium}px`};
  margin-bottom: ${({ theme }) => `${theme.gaps.lgVertical}px`};
`;

export const Brand = styled.p`
  ${font18(700)};
  text-align: center;
  font-weight: bold;
  width: 25%;
`;

export const Line = styled.div`
  background-color: white;
  width: 1px;
  height: 25px;
  content: '';
`;

export const Item = styled.p`
  ${font18(700)};
  text-align: center;
  width: 75%;
`;
