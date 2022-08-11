import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 70vh;
`;

const Index = () => {
  return (
    <Container>
      <span>코드스테이츠 프론트엔드 40기 박연우</span>
      <br />
      <span>
        리액트와 타입스크립트를 이용한 기능 연습 웹 애플리케이션입니다.
      </span>
    </Container>
  );
};

export default Index;
