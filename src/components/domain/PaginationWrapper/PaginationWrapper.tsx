import { Pagination } from '@components/domain';
import { useState } from 'react';

interface PaginationWrapper {
  listLength: number;
}

const PaginationWrapper = ({ listLength }: PaginationWrapper) => {
  const [currentIndex, setCurrentIndex] = useState(1); // @NOTE: 누를 때마다 변화하는 값
  const [postPerPage, setPostPerPage] = useState(6); // @NOTE: 한 페이지당 보여줄 포스트 수
  const [groupPages, setGroupPages] = useState(
    Math.floor(currentIndex / postPerPage)
  );

  return (
    <>
      <Pagination
        totalPages={listLength}
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
