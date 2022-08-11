import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  attemptState,
  answerState,
  inputValueState,
  isSubmitState,
  ballState,
  strikeState,
} from "./atoms/atomsNB";
import Result from "../components/number-baseball/Result";

const NumberBaseball = () => {
  const [answer, setAnswer] = useRecoilState(answerState);
  const [inputValue, setInputValue] = useRecoilState(inputValueState);
  const [isSubmit, setIsSubmit] = useRecoilState(isSubmitState);
  const [attempt, setAttempt] = useRecoilState(attemptState);
  const [ball, setBall] = useRecoilState(ballState);
  const [strike, setStrike] = useRecoilState(strikeState);

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAttempt(attempt + 1);
    setIsSubmit(true);
    console.log(answer);
    console.log(inputValue);
    console.log(attempt);
    if (answer === inputValue) {
      setAnswer("000");
      setAttempt(0);
      setBall(0);
      setStrike(0);
    } else if (attempt === 10) {
      alert("횟수가 초과되었습니다.");
      setAnswer("000");
      setAttempt(0);
      setBall(0);
      setStrike(0);
      setIsSubmit(false);
    }
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
    // console.log(inputValue);
  };

  const arr = answer.split("").map(Number);

  useEffect(() => {
    for (let i = 0; i < 3; i++) {
      if (i === 0) {
        while (arr[0] === arr[1] || arr[0] === arr[2]) {
          arr[0] = Math.ceil(Math.random() * 9);
        }
      }
      if (i === 1) {
        while (arr[1] === arr[0] || arr[1] === arr[2]) {
          arr[1] = Math.ceil(Math.random() * 9);
        }
      }
      if (i === 2) {
        arr[2] = Math.ceil(Math.random() * 9);
        while (arr[2] === arr[1] || arr[2] === arr[0]) {
          arr[2] = Math.ceil(Math.random() * 9);
        }
      }
    }
    // console.log(arr);
    setAnswer(arr.join(""));
  }, [answer]);
  return (
    <>
      <div>
        {answer.split("").map((el, index) => {
          return <span key={index}>{el}</span>;
        })}
      </div>
      <form onSubmit={handleSubmitForm}>
        <input
          placeholder="숫자를 입력하세요"
          type="text"
          onChange={handleChangeInput}
          value={inputValue}
        />
        <button type="submit">입력</button>
      </form>
      {isSubmit ? <Result /> : <></>}
    </>
  );
};

export default NumberBaseball;
