import { flexbox } from '@styles/commonStyles';
import styled from 'styled-components';

export const PageWrapper = styled.div`
  max-width: 1440px;
  height: 100vh;
  padding: ${({ theme }) =>
    `${theme.gaps.lgVertical * 2}px ${theme.gaps.base * 3}px`};
  margin: auto;
  ${flexbox({ fd: 'column', ai: 'stretch', jc: 'around' })};

  @media ${({ theme }) => theme.device.mobile} {
    padding: ${({ theme }) => `${theme.gaps.base * 2}px`};
    height: auto;
    gap: ${({ theme }) => `${theme.gaps.base}px`};
  }
`;
