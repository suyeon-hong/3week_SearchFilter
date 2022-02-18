import React from 'react';
import * as S from './Style';

interface ItemBoxProps {
  brandName: string | null;
  itemName: string;
}

const ItemBox = ({ brandName, itemName }: ItemBoxProps) => {
  return (
    <>
      <S.ItemBox>
        {brandName ? <S.Brand>{brandName}</S.Brand> : <S.Emoji>🌧</S.Emoji>}
        <S.Line></S.Line>
        <S.Item>{itemName}</S.Item>
      </S.ItemBox>
    </>
  );
};

export default ItemBox;
