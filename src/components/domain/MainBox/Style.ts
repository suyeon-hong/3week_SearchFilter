import { hideScrollbar } from '@styles/commonStyles';
import styled from 'styled-components';

export const MainBoxWrapper = styled.section`
  display: none;
  padding: 4px 15px;
  background-color: white;
  border: 1px solid #eeeeee;
  box-sizing: border-box;
  filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.1));
  border-radius: 5px;
  max-height: 80vh;
  overflow-y: auto;
  ${hideScrollbar};

  @media ${({ theme }) => theme.device.mobile} {
    display: block;
  }
`;
