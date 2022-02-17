import { MouseEvent, useState } from 'react';
import * as S from './Style';

interface TagProps {
  item: string;
}

const Tag = ({ item }: TagProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const toggle = (e: MouseEvent<HTMLLIElement>) => {
    setIsChecked(!isChecked);
    !isChecked && console.log((e.target as Element).id);
  };

  return (
    <S.Tag isChecked={isChecked} id={item} onClick={toggle}>
      {item}
    </S.Tag>
  );
};

export default Tag;
