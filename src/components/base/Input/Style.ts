import { flexbox } from '@styles/commonStyles';
import { font18 } from '@styles/fonts';
import styled from 'styled-components';

export const Form = styled.form`
  max-width: 477px;
  height: 60px;
  margin: 0 auto;
  position: relative;
  padding-left: ${({ theme }) => `${theme.gaps.base}px`};
  padding-right: ${({ theme }) => `${theme.gaps.base * 6}px`};
`;

export const UserInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background: #fff;
  ${font18(500)}

  &:focus {
    outline: none;
  }
`;

export const SearchBtn = styled.button`
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.colors.blue};
  border-radius: ${({ theme }) => `${theme.borderRadius.small}px`};
  ${flexbox};
  position: absolute;
  top: 50%;
  right: ${({ theme }) => `${theme.gaps.base}px`};
  transform: translateY(-50%);
`;
