import styled from 'styled-components';
import { flexbox, ellipsis } from '@styles/commonStyles';
import { font16, font18 } from '@styles/fonts';

export const Header = styled.div`
  ${flexbox({ jc: 'between' })};
  width: 100%;
  height: 70px;
  background-color: white;
  border-radius: ${({ theme }) => `${theme.borderRadius.medium}px`};
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
  margin-bottom: ${({ theme }) => `${theme.gaps.base}px`};
`;

export const Brand = styled.p`
  width: 25%;
  ${font16(700)};
  text-align: center;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gray};
`;

export const Emoji = styled.p`
  width: 25%;
  ${font16(600)};
  text-align: center;
  font-weight: bold;
`;

export const Line = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  width: 1px;
  height: 25px;
  content: '';
`;

export const Item = styled.p`
  ${ellipsis(2)};
  ${font18(700)};
  margin: 0 ${({ theme }) => `${theme.gaps.base * 2}px`};
  color: ${({ theme }) => theme.colors.primary};
  width: 75%;
  text-overflow: ellipsis;
`;
