import Header from "./constants/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import GlobalStyle from "./styles/GlobalStyle";
import styled from "styled-components";
import { useState } from "react";
import Questions from "./components/Questions";

export default function App() {

  const [newQuestion, setNewQuestion] = useState(<Main showQuestion={showQuestion} />);

  function showQuestion(value) {
    setNewQuestion(<Questions />);
  }


  return (
    <ConatinerApp>
      <GlobalStyle />
      <Header  />
      {newQuestion}
      <Footer />
    </ConatinerApp>
  );
}

const ConatinerApp = styled.div`
  background-color: #FB6B6B
`;