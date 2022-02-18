import styled from 'styled-components';
import { font10 } from '@styles/fonts';
import { removeTextPointer } from '@styles/commonStyles';

export const TagWrapper = styled.div`
  flex: 0 0 auto;

  >input: checked + label {
    color: #fff;
    background: ${({ theme }) => theme.colors.blue};
  }
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const Tag = styled.label`
  display: block;
  ${font10(700)};
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.tag};
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: ${({ theme }) => `${theme.borderRadius.medium}px`};
  padding: ${({ theme }) => `${theme.gaps.base}px`};
  cursor: pointer;
  ${removeTextPointer}
`;
