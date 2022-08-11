import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import EndTalk from "./routes/EndTalk";
import Index from "./routes/Index";
import MultipleTable from "./routes/MultipleTable";
import NumberBaseball from "./routes/NumberBaseball";

const Nav = styled.nav`
  width: 100vw;
  height: 50px;
  background-color: ${(props) => props.theme.accentColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
`;

const Title = styled.div``;

const Ul = styled.ul`
  display: flex;
  width: 50vw;
`;

const Li = styled.li`
  margin-right: 20px;
`;

const Main = styled.main`
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translate(-50%, 0);
  width: 60vw;
  height: 80vh;
  border: 1px solid ${(props) => props.theme.accentColor};
  border-radius: 100px;
  padding: 30px;
  text-align: center;
`;

function App() {
  return (
    <>
      <Nav>
        <Link to="/">
          <Title>D.P. - 박연우</Title>
        </Link>
        <Ul>
          <Link to="/multiplcation-table">
            <Li>구구단</Li>
          </Link>
          <Link to="/end-talk">
            <Li>끝말잇기</Li>
          </Link>
          <Link to="/number-baseball">
            <Li>숫자야구</Li>
          </Link>
        </Ul>
      </Nav>
      <Main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/multiplcation-table" element={<MultipleTable />} />
          <Route path="/end-talk" element={<EndTalk />} />
          <Route path="/number-baseball" element={<NumberBaseball />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
