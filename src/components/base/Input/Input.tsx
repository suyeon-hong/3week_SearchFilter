import * as S from './Style';
import { RiSearchLine } from 'react-icons/ri';
import { FormEvent, ChangeEvent, useState } from 'react';

const Input = () => {
  const [userInput, setUserInput] = useState<string>('');

  const getUserInput = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userInput === '') return;
    console.log(userInput);
    setUserInput('');
  };

  const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  return (
    <S.Form onSubmit={getUserInput}>
      <S.UserInput
        value={userInput}
        placeholder="제품명, 브랜드명 검색"
        onChange={handelChange}
      />
      <S.SearchBtn type="submit">
        <RiSearchLine />
      </S.SearchBtn>
    </S.Form>
  );
};

export default Input;
