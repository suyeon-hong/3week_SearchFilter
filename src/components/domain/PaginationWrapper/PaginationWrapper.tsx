import { Pagination } from '@components/domain';
import React, { useState } from 'react';
import { IMockData } from '@types';

interface PaginationWrapper {
  list: IMockData[];
}

const PaginationWrapper = ({ list }: PaginationWrapper) => {
  const POST_PER_PAGE = 6; // @NOTE: 한 페이지당 보여줄 포스트 수
  const [currentIndex, setCurrentIndex] = useState(1); // @NOTE: 누를 때마다 변화하는 값
  const [groupPages, setGroupPages] = useState(
    Math.floor(currentIndex / POST_PER_PAGE) + 1
  );
  const totalGroupPages = Math.floor(list.length / POST_PER_PAGE);

  const offset = (currentIndex - 1) * POST_PER_PAGE;

  return (
    <>
      {React.Children.toArray(
        list.slice(offset, offset + POST_PER_PAGE).map(({ 제품명, 브랜드 }) => (
          <li>
            {제품명} {브랜드}
          </li>
        ))
      )}
      <Pagination
        totalPages={list.length}
        // totalPages={37}
        totalGroupPages={totalGroupPages}
        groupPages={groupPages}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        setGroupPages={setGroupPages}
      />
    </>
  );
};

export default PaginationWrapper;
