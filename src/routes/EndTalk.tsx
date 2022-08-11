import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { inputValueState, messageState, wordState } from "./atoms/atomsET";

const Container = styled.div`
  height: 70vh;
`;

const EndTalk = () => {
  const [word, setWord] = useRecoilState(wordState);
  const [inputValue, setInputValue] = useRecoilState(inputValueState);
  const [message, setmessage] = useRecoilState(messageState);

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (word[word.length - 1] !== inputValue[0]) {
      setmessage("틀렸습니다!");
    } else {
      setmessage("");
      setWord(inputValue);
    }
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <Container>
      <div>{word}</div>
      <form onSubmit={handleSubmitForm}>
        <input
          type="text"
          placeholder="글자를 입력하세요"
          value={inputValue}
          onChange={handleChangeInput}
        />
        <button type="submit">입력</button>
        <div>{message}</div>
      </form>
    </Container>
  );
};

export default EndTalk;
