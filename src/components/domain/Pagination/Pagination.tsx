import React, { Dispatch, SetStateAction, useState, useEffect } from 'react';
import { PaginationBox } from '@components/base';
import * as S from './Style';

interface PaginationProps {
  totalPages: number;
  groupPages: number;
  postPerPage: number;
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  setGroupPages: Dispatch<SetStateAction<number>>;
}

export type Direction = 'next' | 'prev';

const Pagination = ({
  totalPages,
  groupPages,
  currentIndex,
  setCurrentIndex,
  setGroupPages,
}: PaginationProps) => {
  // @NOTE: gropPages, totalPosts 값을 보냄
  // @NOTE: currentPage가 totalPost를 넘지 않으면 groupPages 부터 10개씩 보여준다.
  // @NOTE: currentPage가 totalPost를 넘으면 groupPages부터 postPerPage까지 더해서 보여준다.
  const MAX_PAGES_PER_GROUP = 10;

  const firstIndex = (groupPages - 1) * MAX_PAGES_PER_GROUP + 1;
  const lastIndex = firstIndex + MAX_PAGES_PER_GROUP - 1;
  const [indexListPerGroup, setIndexListPerGroup] = useState<number[]>([]);

  useEffect(() => {
    const list = [];

    for (let i = firstIndex; i <= lastIndex; i++) {
      if (i > totalPages) break;
      list.push(i);
    }

    setIndexListPerGroup([...list]);
  }, [totalPages, groupPages]);

  const handleSingleBtn = (direction: Direction) => {
    setGroupPages((prevGroup) =>
      direction === 'next' ? prevGroup + 1 : prevGroup - 1
    );
    setCurrentIndex((prevIndex) =>
      direction === 'next'
        ? prevIndex + MAX_PAGES_PER_GROUP
        : prevIndex - MAX_PAGES_PER_GROUP
    );
  };

  const handleDoubleBtn = (direction: Direction) => {
    // @NOTE: 첫번째 / 마지막 그룹 페이지로 이동
    // setGroupPages((prevGroup) =>
    // Math.ceil(totalPages / MAX_PAGES_PER_GROUP), groupPages
    switch (direction) {
      case 'next': {
        const lastGroupPages = Math.ceil(totalPages / MAX_PAGES_PER_GROUP);
        setGroupPages(lastGroupPages);
        setCurrentIndex((lastGroupPages - 1) * MAX_PAGES_PER_GROUP + 1);
        break;
      }
      case 'prev':
        setGroupPages(1);
        setCurrentIndex(1);
        break;
      default:
        console.log('hi');
    }
  };

  const handleIndexBtn = (currentIdx: number) => {
    setCurrentIndex(currentIdx);
  };

  return (
    <S.PaginationWrapper>
      <PaginationBox
        mode="double"
        direction="prev"
        checkEndIndex={firstIndex <= 1}
        onClick={() => handleDoubleBtn('prev')}
      />
      <PaginationBox
        mode="single"
        direction="prev"
        checkEndIndex={firstIndex <= 1}
        onClick={() => handleSingleBtn('prev')}
      />
      {React.Children.toArray(
        indexListPerGroup.map((pageIndex) => (
          <PaginationBox
            mode="none"
            content={pageIndex}
            aria-current={currentIndex === pageIndex ? 'page' : null}
            onClick={() => handleIndexBtn(pageIndex)}
          />
        ))
      )}
      <PaginationBox
        mode="single"
        direction="next"
        onClick={() => handleSingleBtn('next')}
        checkEndIndex={lastIndex >= totalPages}
      />
      <PaginationBox
        mode="double"
        direction="next"
        onClick={() => handleDoubleBtn('next')}
        checkEndIndex={lastIndex >= totalPages}
      />
    </S.PaginationWrapper>
  );
};

export default Pagination;
