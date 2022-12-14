import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import {
  answerSelector,
  firstNumberState,
  inputValueState,
  isSubmitState,
  messageState,
  secondNumberState,
} from "./atoms/atomsMT";

const Container = styled.div`
  height: 70vh;
`;

const Question = styled.div`
  margin-bottom: 10px;
`;

const MultipleTable = () => {
  const [firstNumber, setFirstNumber] = useRecoilState(firstNumberState);
  const [secondNumber, setSecondNumber] = useRecoilState(secondNumberState);
  const [inputValue, setInputValue] = useRecoilState(inputValueState);
  const [isSubmit, setIsSubmit] = useRecoilState(isSubmitState);
  const [message, setMessage] = useRecoilState(messageState);
  const answer = useRecoilValue(answerSelector);

  const options = [2, 3, 4, 5, 6, 7, 8, 9].map((number) => {
    return <option key={number} value={number}>{`${number}단`}</option>;
  });

  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (+event.target.value === 0) {
      setFirstNumber(Math.ceil(Math.random() * 9));
      setSecondNumber(Math.ceil(Math.random() * 9));
    } else {
      setFirstNumber(+event.target.value);
      setSecondNumber(Math.ceil(Math.random() * 9));
    }
  };

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmit(true);
    if (!/^[0-9]+$/.test(inputValue)) {
      setMessage("숫자만 입력하세요");
      setInputValue("");
    } else if (answer !== Number(inputValue)) {
      setMessage("실패...");
      setInputValue("");
    } else {
      event.preventDefault();
      setFirstNumber(Math.ceil(Math.random() * 9));
      setSecondNumber(Math.ceil(Math.random() * 9));
      setMessage("성공");
      setInputValue("");
    }
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <Container>
      <Question>
        <select onChange={handleChangeSelect}>
          <option value={0}>랜덤</option>
          {options}
        </select>
        <span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          {`${firstNumber} 곱하기 ${secondNumber}는?`}
        </span>
      </Question>
      <form onSubmit={handleSubmitForm}>
        <input type="text" value={inputValue} onChange={handleChangeInput} />
        <button type="submit">입력</button>
        {isSubmit ? <div>{message}</div> : null}
      </form>
    </Container>
  );
};

export default MultipleTable;

// select 아직 미비
// 숫자 1 처리 미비
