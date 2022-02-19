import styled from 'styled-components';
import { flexbox } from '@styles/commonStyles';

export const ResetBtn = styled.button`
  width: 50px;
  height: 50px;
  background: #fff;
  border-radius: ${({ theme }) => `${theme.borderRadius.small}px`};
  ${flexbox};
  font-size: 24px;
  color: #fff;

  path {
    stroke: ${({ theme }) => theme.colors.blue};
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 40px;
    height: 40px;
  }
`;
