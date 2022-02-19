import { Dispatch, SetStateAction } from 'react';
import * as S from './Style';

interface ItemBrandBtnProps {
  userSelect: boolean;
  setUserSelect: Dispatch<boolean>;
  setCurrentInput: Dispatch<SetStateAction<string>>;
  initFilteredList: () => void;
}

const ItemBrandBtn = ({
  userSelect,
  setUserSelect,
  setCurrentInput,
  initFilteredList,
}: ItemBrandBtnProps) => {
  const handleUserSelect = (): void => {
    setUserSelect(!userSelect);
    setCurrentInput('');
    initFilteredList();
  };

  return (
    <S.ButtonWrapper className="buttonWrapper">
      <input
        type="radio"
        id="radio"
        checked={userSelect}
        onChange={handleUserSelect}
      />
      <S.ItemLabel
        htmlFor="radio"
        userSelect={userSelect}
        onClick={() => handleUserSelect()}>
        <span>상품명 검색</span>
      </S.ItemLabel>

      <input
        type="radio"
        id="radio2"
        checked={!userSelect}
        onChange={handleUserSelect}
      />
      <S.BrandLabel
        htmlFor="radio2"
        userSelect={userSelect}
        onClick={() => handleUserSelect()}>
        <span>브랜드 검색</span>
      </S.BrandLabel>
    </S.ButtonWrapper>
  );
};

export default ItemBrandBtn;
