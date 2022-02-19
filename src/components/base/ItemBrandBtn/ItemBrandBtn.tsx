import { Dispatch } from 'react';
import * as S from './Style';

interface ItemBrandBtnProps {
  userSelect: boolean;
  setUserSelect: Dispatch<boolean>;
}

const ItemBrandBtn = ({ userSelect, setUserSelect }: ItemBrandBtnProps) => {
  const handleUserSelect = (): void => {
    setUserSelect(!userSelect);
  };
  return (
    <S.ButtonWrapper className="buttonWrapper">
      <input type="radio" id="radio" checked={userSelect} />
      <S.ItemLabel
        htmlFor="radio"
        userSelect={userSelect}
        onClick={() => handleUserSelect()}>
        <span>상품명 검색</span>
      </S.ItemLabel>

      <input type="radio" id="radio2" checked={!userSelect} />
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
