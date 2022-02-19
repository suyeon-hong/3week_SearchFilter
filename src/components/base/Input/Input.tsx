import * as S from './Style';
import { RiSearchLine } from 'react-icons/ri';
import { ChangeEvent, Dispatch, SetStateAction, useCallback } from 'react';
import { debounce } from 'lodash';

interface InputProps {
  setUserInput: Dispatch<SetStateAction<string>>;
  userInput: string;
  setCurrentId: Dispatch<SetStateAction<string>>;
}

const Input = ({ setUserInput, userInput, setCurrentId }: InputProps) => {
  const debouncedSearch = useCallback(
    debounce((value: string) => setUserInput(value), 100),
    [setUserInput]
  );

  const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
    debouncedSearch(e.target.value);
    setCurrentId('');
  };

  const initInput = () => {
    setUserInput('');
  };

  return (
    <S.InputContainer>
      <S.inputInner>
        <S.UserInput
          value={userInput}
          placeholder="검색어를 입력해 주세요."
          onChange={handelChange}
        />
        <S.SearchBtn type="submit" onClick={initInput}>
          <RiSearchLine />
        </S.SearchBtn>
      </S.inputInner>
    </S.InputContainer>
  );
};

export default Input;
