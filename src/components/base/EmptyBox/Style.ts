import styled from 'styled-components';
import { flexbox } from '@styles/commonStyles';

export const Content = styled.div`
  ${flexbox({ jc: 'around' })};
  width: 100%;
  height: 60vh;
  background-color: white;
  border-radius: ${({ theme }) => `${theme.borderRadius.medium}px`};
  margin-bottom: ${({ theme }) => `${theme.gaps.base}px`};
`;
