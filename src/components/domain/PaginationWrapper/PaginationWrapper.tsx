import { Pagination } from '@components/domain';
import React, { useState } from 'react';
import { IMockData } from '@types';

interface PaginationWrapper {
  list: IMockData[];
}

const PaginationWrapper = ({ list }: PaginationWrapper) => {
  const [currentIndex, setCurrentIndex] = useState(1); // @NOTE: 누를 때마다 변화하는 값
  const [postPerPage, setPostPerPage] = useState(6); // @NOTE: 한 페이지당 보여줄 포스트 수
  const [groupPages, setGroupPages] = useState(
    Math.floor(currentIndex / postPerPage) + 1
  );
  const offset = (currentIndex - 1) * postPerPage;

  return (
    <>
      {React.Children.toArray(
        list.slice(offset, offset + postPerPage).map(({ 제품명, 브랜드 }) => (
          <li>
            {제품명} {브랜드}
          </li>
        ))
      )}
      <Pagination
        totalPages={list.length}
        // totalPages={37}
        groupPages={groupPages}
        postPerPage={postPerPage}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        setGroupPages={setGroupPages}
      />
    </>
  );
};

export default PaginationWrapper;
