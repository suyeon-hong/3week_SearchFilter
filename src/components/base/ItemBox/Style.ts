import styled from 'styled-components';
import { flexbox, ellipsis, removeTextPointer } from '@styles/commonStyles';
import { font12, font14, font16, font18 } from '@styles/fonts';

export const ItemBox = styled.div`
  ${flexbox({ jc: 'between' })};
  width: 100%;
  height: 70px;
  background-color: white;
  border-radius: ${({ theme }) => `${theme.borderRadius.medium}px`};
  cursor: pointer;
  ${removeTextPointer};

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
  margin-bottom: ${({ theme }) => `${theme.gaps.base}px`};

  @media ${({ theme }) => theme.device.mobile} {
    display: block;
    height: 80px;
    border-radius: 0;
    border-bottom: 1px solid #d9d9dd;
  }
`;

export const Brand = styled.p`
  width: 25%;
  ${font16(700)};
  text-align: center;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gray};

  @media ${({ theme }) => theme.device.mobile} {
    display: inline-block;
    height: 14px;
    ${font12(700)};
    margin: 4px 6px;
    text-align: initial;
  }
`;

export const Emoji = styled.p`
  width: 25%;
  ${font16(600)};
  text-align: center;
  font-weight: bold;
  @media ${({ theme }) => theme.device.mobile} {
    display: inline-block;
    height: 14px;
    margin: 4px 6px;
    text-align: initial;
  }
`;

export const Line = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  width: 1px;
  height: 25px;
  content: '';

  @media ${({ theme }) => theme.device.mobile} {
    display: none;
  }
`;

export const Item = styled.p`
  ${ellipsis(2)};
  ${font18(700)};
  margin: 0 ${({ theme }) => `${theme.gaps.base * 2}px`};
  color: ${({ theme }) => theme.colors.primary};
  width: 75%;

  @media ${({ theme }) => theme.device.mobile} {
    width: 95%;
    display: inline-block;
    height: 57px;
    ${font14(500)};
    color: #535353;
    margin: 4px 6px 20px 6px;
    ${ellipsis(2)};
  }
`;
