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
  const lastIndex = groupPages * MAX_PAGES_PER_GROUP + MAX_PAGES_PER_GROUP;
  // @NOTE: groupPages가 0부터 시작하므로 10을 곱하고 10을 더해줘야 함.
  const firstIndex = lastIndex - 10;
  const [indexListPerGroup, setIndexListPerGroup] = useState<number[]>([]);

  useEffect(() => {
    const list = [];

    for (let i = firstIndex; i <= lastIndex; i++) {
      if (i === 0) continue;
      if (i > totalPages) break;
      list.push(i);
    }

    setIndexListPerGroup([...list]);
  }, [groupPages]);

  const handlePrevNextBtn = (direction: Direction) => {
    setGroupPages((prevGroup) =>
      direction === 'next' ? prevGroup + 1 : prevGroup - 1
    );
  };

  const handleIndexBtn = (currentIdx: number) => {
    setCurrentIndex(currentIdx);
  };

  console.log(currentIndex, 'cur');

  return (
    <S.PaginationWrapper>
      <PaginationBox
        mode="double"
        direction="prev"
        checkEndIndex={firstIndex <= 0}
        onClick={() => handlePrevNextBtn('prev')}
      />
      <PaginationBox
        mode="single"
        direction="prev"
        checkEndIndex={firstIndex <= 0}
        onClick={() => handlePrevNextBtn('prev')}
      />
      {React.Children.toArray(
        indexListPerGroup.map((pageIndex) => {
          console.log(pageIndex, currentIndex);

          return (
            <PaginationBox
              mode="none"
              content={pageIndex}
              aria-current={currentIndex === pageIndex ? 'page' : null}
              onClick={() => handleIndexBtn(pageIndex)}
            />
          );
        })
      )}
      <PaginationBox
        mode="single"
        direction="next"
        onClick={() => handlePrevNextBtn('next')}
        checkEndIndex={lastIndex >= totalPages}
      />
      <PaginationBox
        mode="double"
        direction="next"
        onClick={() => handlePrevNextBtn('next')}
        checkEndIndex={lastIndex >= totalPages}
      />
    </S.PaginationWrapper>
  );
};

export default Pagination;
