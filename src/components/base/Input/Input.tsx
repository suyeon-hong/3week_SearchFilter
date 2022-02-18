import * as S from './Style';
import { RiSearchLine } from 'react-icons/ri';

const Input = () => {
  return (
    <S.Form>
      <S.UserInput placeholder="제품명, 브랜드명 검색" />
      <S.SearchBtn>
        <RiSearchLine />
      </S.SearchBtn>
    </S.Form>
  );
};

export default Input;
