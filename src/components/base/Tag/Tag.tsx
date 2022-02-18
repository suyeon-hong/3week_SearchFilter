import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import * as S from './Style';

interface TagProps {
  item: string;
  setCheckedBrand: Dispatch<SetStateAction<string>>;
}

const Tag = ({ item, setCheckedBrand }: TagProps) => {
  const clickHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const id = (e.target as Element).id;
    setCheckedBrand(id);
  };

  return (
    <S.TagWrapper>
      <S.HiddenInput
        name="tag"
        id={item}
        type="radio"
        onChange={clickHandler}
      />
      <S.Tag htmlFor={item} id={item}>
        {item}
      </S.Tag>
    </S.TagWrapper>
  );
};

export default Tag;
