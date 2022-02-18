import styled from 'styled-components';
import { flexbox } from '@styles/commonStyles';

export const TagList = styled.ul`
  display: none;

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    padding: ${({ theme }) => `${theme.gaps.base}px 0`};
    ${flexbox({ jc: 'start' })};
    gap: ${({ theme }) => `${theme.gaps.base}px`};
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
