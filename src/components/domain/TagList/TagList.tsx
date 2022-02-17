import React from 'react';
import * as S from './Style';
import { Tag } from '@components/base';
import { Item } from '@types';

interface TagListProps {
  data: [Item];
}

const TagList = ({ data }: TagListProps) => {
  console.log(data);
  const tagList: string[] = [];

  data.forEach((item) => {
    const brand = item.브랜드;

    if (brand && tagList.indexOf(brand) < 0) {
      tagList.push(brand);
    }
  });

  return (
    <S.TagList>
      {tagList &&
        React.Children.toArray(tagList.map((item) => <Tag item={item} />))}
    </S.TagList>
  );
};

export default TagList;
