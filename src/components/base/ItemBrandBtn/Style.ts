import styled from 'styled-components';
import { font16, font18 } from '@styles/fonts';

export const ButtonWrapper = styled.div`
  text-align: center;
`;

export const ItemLabel = styled.label<{ userSelect: boolean }>`
  background-color: ${({ userSelect }) => (userSelect ? '#629AFF' : 'white')};
  color: ${({ userSelect }) => (userSelect ? 'white' : 'black')};
  padding: 12px 10px;
  border-radius: 4px;
  ${font18(700)};

  @media (max-width: 1040px) {
    padding: 7px 3px;
    ${font16(500)};
  }
  @media (max-width: 836px) {
    display: none;
  }
`;

export const BrandLabel = styled.label<{ userSelect: boolean }>`
  background-color: ${({ userSelect }) => (userSelect ? 'white' : '#629AFF')};
  color: ${({ userSelect }) => (userSelect ? 'black' : 'white')};
  padding: 12px 10px;
  border-radius: 4px;
  ${font18(700)};

  @media (max-width: 1040px) {
    padding: 7px 3px;
    ${font16(500)};
  }
  @media (max-width: 836px) {
    display: none;
  }
`;
