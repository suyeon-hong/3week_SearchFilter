import styled from 'styled-components';
import { font16 } from '@styles/fonts';
import { removeTextPointer } from '@styles/commonStyles';

export const ButtonWrapper = styled.div`
  text-align: center;
  ${removeTextPointer}

  input {
    display: none;
  }
`;

export const ItemLabel = styled.label<{ userSelect: boolean }>`
  background-color: ${({ userSelect }) => (userSelect ? '#629AFF' : 'white')};
  color: ${({ userSelect }) => (userSelect ? 'white' : 'black')};
  padding: ${({ theme }) => ` ${theme.gaps.base}px`};
  border-radius: 4px;
  ${font16(500)};
  cursor: pointer;
  margin-right: ${({ theme }) => `${theme.gaps.base}px`};

  @media ${({ theme }) => theme.device.mobile} {
    display: none;
  }
`;

export const BrandLabel = styled.label<{ userSelect: boolean }>`
  background-color: ${({ userSelect }) => (userSelect ? 'white' : '#629AFF')};
  color: ${({ userSelect }) => (userSelect ? 'black' : 'white')};
  padding: ${({ theme }) => ` ${theme.gaps.base}px`};
  border-radius: 4px;
  ${font16(500)};
  cursor: pointer;

  @media ${({ theme }) => theme.device.mobile} {
    display: none;
  }
`;
