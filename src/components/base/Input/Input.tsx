import * as S from './Style';
import { RiSearchLine } from 'react-icons/ri';
import {
  FormEvent,
  ChangeEvent,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

interface InputProps {
  setUserInput: Dispatch<SetStateAction<string>>;
}

const Input = ({ setUserInput }: InputProps) => {
  const [currentInput, setCurrentInput] = useState<string>('');

  const getUserInput = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (currentInput === '') return;
    setUserInput(currentInput);
    setCurrentInput('');
  };

  const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentInput(e.target.value);
  };

  return (
    <S.Form onSubmit={getUserInput}>
      <S.InputWrapper>
        <S.UserInput
          value={currentInput}
          placeholder="제품명, 브랜드명 검색"
          onChange={handelChange}
        />
        <S.SearchBtn type="submit">
          <RiSearchLine />
        </S.SearchBtn>
      </S.InputWrapper>
    </S.Form>
  );
};

export default Input;
