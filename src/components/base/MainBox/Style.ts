import styled from 'styled-components';

export const MainBoxWrapper = styled.section`
  margin: ${({ theme }) => `${theme.gaps.lgVertical}px`} 27px;
  padding: ${({ theme }) => `${theme.gaps.lgVertical}px`} 13px 0 13px;
  border: 1px solid #eeeeee;
  box-sizing: border-box;
  filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.1));
  border-radius: 5px;
  background-color: #e5e5e5;

  @media ${({ theme }) => theme.device.mobile} {
    padding: 4px 15px;
    background-color: white;
  }
`;
