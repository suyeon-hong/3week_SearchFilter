import { ChangeEvent, Dispatch, SetStateAction, MouseEvent } from 'react';
import * as S from './Style';

interface TagProps {
  item: string;
  currentId: string;
  setUserInput: Dispatch<SetStateAction<string>>;
  setCurrentId: Dispatch<SetStateAction<string>>;
  setCheckedBrand: Dispatch<SetStateAction<string>>;
}

const Tag = ({
  item,
  currentId,
  setUserInput,
  setCurrentId,
  setCheckedBrand,
}: TagProps) => {
  const changeHnadler = (e: ChangeEvent<HTMLInputElement>) => {
    const id = (e.target as Element).id;

    setCurrentId(id);
    setCheckedBrand(id);
  };

  const toggle = (e: MouseEvent<HTMLDivElement>) => {
    const id = (e.target as Element).id;

    if (currentId === id) {
      setCurrentId('');
      setCheckedBrand('');
    } else {
      setCurrentId(id);
      setCheckedBrand(id);
    }
    setUserInput('');
  };

  return (
    <S.TagWrapper id={item} onClick={toggle}>
      <S.HiddenInput
        name="tag"
        id={item}
        type="radio"
        checked={currentId === item}
        onChange={changeHnadler}
      />
      <S.Tag htmlFor={item} id={item}>
        {item}
      </S.Tag>
    </S.TagWrapper>
  );
};

export default Tag;
