import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import {
  answerState,
  attemptState,
  ballState,
  detailListState,
  detailState,
  inputValueState,
  strikeState,
} from "../../routes/atoms/atomsNB";

const Container = styled.div`
  display: flex;
  margin: 20px auto;
  justify-content: center;
`;

const Attempt = styled.div`
  width: 50px;
  margin-right: 20px;
`;

const Detail = styled.div`
  width: 200px;
`;

const Result = () => {
  const [detail, setDetail] = useRecoilState(detailState);
  const [ball, setBall] = useRecoilState(ballState);
  const [strike, setStrike] = useRecoilState(strikeState);
  // const [detailList, setDetailList] = useRecoilState(detailListState);
  const answer = useRecoilValue(answerState);
  const attempt = useRecoilValue(attemptState);
  const inputValue = useRecoilValue(inputValueState);

  const strikeCount = (inputValue: string, answer: string) => {
    let count = 0;
    for (let i = 0; i < 3; i++) {
      if (inputValue[i] === answer[i]) count++;
    }
    setStrike(count);
  };

  const ballCount = (inputValue: string, answer: string) => {
    let count = 0;
    for (let i = 0; i < 3; i++) {
      if (answer.includes(inputValue[i])) count++;
    }
    setBall(count - strike);
  };

  useEffect(() => {
    strikeCount(inputValue, answer);
    ballCount(inputValue, answer);
    setDetail(`${strike} 스트라이크, ${ball} 볼`);
    //setDetailList([...detailList, `${strike} 스트라이크, ${ball} 볼`]);
  }, [strike, ball, attempt]);

  return (
    <Container>
      <Attempt>{`시도 : ${attempt}`}</Attempt>
      <Detail>{detail}</Detail>
    </Container>
  );
};

export default Result;
