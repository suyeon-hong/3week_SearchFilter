import styled from 'styled-components';
import { flexbox } from '@styles/commonStyles';
import { PaginationBoxProps } from './PaginationBox';

interface BoxProps {
  mode: PaginationBoxProps['mode'];
  direction?: PaginationBoxProps['direction'];
}

export const Box = styled.button<BoxProps>`
  position: relative;
  ${flexbox({ flex: 'inline-flex' })};
  flex-shrink: 0;
  background-color: white;
  width: 35px;
  height: 35px;
  text-align: center;
  border-radius: ${({ theme }) => `${theme.borderRadius.medium}px`};

  [aria-current='page'] {
    // FIXME: 스타일 안먹음
    background-color: ${({ theme }) => theme.colors.focus};
    font-weight: bold;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:not([disabled]):hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }

  svg {
    position: ${({ mode }) => mode === 'double' && 'absolute'};
    &:first-of-type {
      right: 5px;
    }
    &:nth-of-type(2) {
      left: 6px;
    }

    &.next {
      transform: rotate(90deg);
    }

    &.prev {
      transform: rotate(-90deg);
    }
  }
`;
