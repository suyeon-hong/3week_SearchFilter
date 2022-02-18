import React, {
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
  useMemo,
} from 'react';
import { PaginationBox } from '@components/base';
import * as S from './Style';

interface PaginationProps {
  totalPages: number;
  totalGroupPages: number;
  groupPages: number;
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  setGroupPages: Dispatch<SetStateAction<number>>;
}

export type Direction = 'next' | 'prev';

const Pagination = ({
  totalPages,
  totalGroupPages,
  groupPages,
  currentIndex,
  setCurrentIndex,
  setGroupPages,
}: PaginationProps) => {
  // @NOTE: gropPages, totalPosts 값을 보냄
  // @NOTE: currentPage가 totalPost를 넘지 않으면 groupPages 부터 10개씩 보여준다.
  // @NOTE: currentPage가 totalPost를 넘으면 groupPages부터 postPerPage까지 더해서 보여준다.
  const MAX_PAGES_PER_GROUP = 10;

  // Math.floor(totalPosts / perPage) = 93
  // 37 / 6 = 6
  // 만약 groupPages * 10 > totalGroupPages 라면 groupPages ~ groupPages + perPage 까지만 반복문
  // 만약 groupPages * 10 < totalGroupPages 라면 10개씩 끊어서 보여줌

  const firstIndex =
    groupPages === 1 ? groupPages : (groupPages - 1) * MAX_PAGES_PER_GROUP + 1;

  const checkOver10GroupPages = () => {
    const lastIndexByGroupPages =
      firstIndex === 1 ? 1 * MAX_PAGES_PER_GROUP : firstIndex;
    if (lastIndexByGroupPages <= MAX_PAGES_PER_GROUP) {
      return lastIndexByGroupPages > totalGroupPages;
    } else {
      return lastIndexByGroupPages + MAX_PAGES_PER_GROUP > totalGroupPages;
    }
  };

  const isOver10 = useMemo(
    () => checkOver10GroupPages(),
    [firstIndex, totalGroupPages]
  );

  const lastIndex = isOver10
    ? totalGroupPages
    : firstIndex + MAX_PAGES_PER_GROUP - 1;
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
    setCurrentIndex(
      direction === 'next'
        ? firstIndex + MAX_PAGES_PER_GROUP
        : firstIndex - MAX_PAGES_PER_GROUP
    );
  };

  const handleDoubleBtn = (direction: Direction) => {
    // @NOTE: 첫번째 / 마지막 그룹 페이지로 이동
    // setGroupPages((prevGroup) =>
    // Math.ceil(totalPages / MAX_PAGES_PER_GROUP), groupPages
    switch (direction) {
      case 'next': {
        const currentGroupPages = Math.floor(totalGroupPages / 10);

        setGroupPages(currentGroupPages + 1);
        setCurrentIndex(currentGroupPages * 10 + 1);
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
      <S.PaginationInner>
        <S.MoveBtnvWrapper>
          <PaginationBox
            mode="double"
            direction="prev"
            checkEndIndex={groupPages <= 1}
            onClick={() => handleDoubleBtn('prev')}
          />
          <PaginationBox
            mode="single"
            direction="prev"
            checkEndIndex={groupPages <= 1}
            onClick={() => handleSingleBtn('prev')}
          />
        </S.MoveBtnvWrapper>
        <S.Pagination>
          {React.Children.toArray(
            indexListPerGroup.map((pageIndex) => (
              <PaginationBox
                mode="none"
                content={pageIndex}
                isActive={currentIndex === pageIndex}
                aria-current={currentIndex === pageIndex ? 'page' : null}
                onClick={() => handleIndexBtn(pageIndex)}
              />
            ))
          )}
        </S.Pagination>
        <S.MoveBtnvWrapper>
          <PaginationBox
            mode="single"
            direction="next"
            onClick={() => handleSingleBtn('next')}
            checkEndIndex={isOver10}
          />
          <PaginationBox
            mode="double"
            direction="next"
            onClick={() => handleDoubleBtn('next')}
            checkEndIndex={isOver10}
          />
        </S.MoveBtnvWrapper>
      </S.PaginationInner>
    </S.PaginationWrapper>
  );
};

export default Pagination;
