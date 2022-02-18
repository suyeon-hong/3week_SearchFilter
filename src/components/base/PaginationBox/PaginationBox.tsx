import { Direction } from '@components/domain/Pagination/Pagination';
import { BsFillTriangleFill } from 'react-icons/bs';
import * as S from './Style';

export interface PaginationBoxProps {
  mode: 'single' | 'double' | 'none';
  direction?: Direction;
  content?: number;
  isActive?: boolean;
  checkEndIndex?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const PaginationBox = ({
  mode = 'none',
  direction,
  content,
  isActive,
  checkEndIndex,
  onClick,
}: PaginationBoxProps) => {
  let BoxComponent = null;

  switch (mode) {
    case 'none':
      if (content && mode === 'none') {
        BoxComponent = (
          <S.Box mode="none" onClick={onClick} isActive={isActive}>
            {content}
          </S.Box>
        );
      }
      break;
    case 'single':
      BoxComponent = (
        <S.Box
          mode="single"
          className={direction}
          onClick={onClick}
          disabled={checkEndIndex}>
          <BsFillTriangleFill />
        </S.Box>
      );
      break;
    case 'double':
      BoxComponent = (
        <S.Box
          mode="double"
          className={direction}
          onClick={onClick}
          disabled={checkEndIndex}>
          <BsFillTriangleFill />
          <BsFillTriangleFill />
        </S.Box>
      );
      break;
    default:
      throw new Error('해당되는 컴포넌트 없음');
  }

  return <>{BoxComponent}</>;
};

export default PaginationBox;
