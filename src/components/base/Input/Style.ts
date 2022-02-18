import { flexbox } from '@styles/commonStyles';
import { font14, font18 } from '@styles/fonts';
import styled from 'styled-components';
import { removeTextPointer } from '@styles/commonStyles';

export const Form = styled.form`
  max-width: 477px;
  height: 60px;
  margin: 0 auto;
  position: relative;
  ${removeTextPointer};

  @media ${({ theme }) => theme.device.mobile} {
    height: 50px;
  }
`;

export const UserInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background: #fff;
  ${font18(400)};
  border-radius: ${({ theme }) => `${theme.borderRadius.small}px`};
  padding-left: ${({ theme }) => `${theme.gaps.base * 2}px`};
  padding-right: ${({ theme }) => `${theme.gaps.base * 7}px`};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }

  @media ${({ theme }) => theme.device.mobile} {
    ${font14(400)};
    padding-left: ${({ theme }) => `${theme.gaps.base}px`};
    padding-right: ${({ theme }) => `${theme.gaps.base * 5}px`};
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
  font-size: 24px;
  color: #fff;

  @media ${({ theme }) => theme.device.mobile} {
    width: 40px;
    height: 40px;
    right: ${({ theme }) => `${theme.gaps.base / 2}px`};
  }
`;
