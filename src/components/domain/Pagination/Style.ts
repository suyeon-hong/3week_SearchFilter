import styled from 'styled-components';
import { flexbox, removeTextPointer } from '@styles/commonStyles';

export const PaginationWrapper = styled.div``;

export const Pagination = styled.nav`
  button:not(:first-of-type) {
    margin-left: 5px;
  }
  ${removeTextPointer};
`;

export const PaginationInner = styled.div`
  ${flexbox({ flex: 'flex', jc: 'between' })};
  gap: 5px;
  max-width: 700px;
  margin: 0 auto;
`;

export const MoveBtnvWrapper = styled.div`
  ${flexbox};
  gap: 5px;
`;
