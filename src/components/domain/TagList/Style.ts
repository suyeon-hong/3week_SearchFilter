import styled from 'styled-components';
import { flexbox } from '@styles/commonStyles';

export const TagList = styled.ul`
  width: 100%;
  ${flexbox({ jc: 'start' })};
  gap: ${({ theme }) => `${theme.gaps.base}px`};
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
