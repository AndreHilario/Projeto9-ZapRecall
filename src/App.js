import Header from "./constants/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import GlobalStyle from "./styles/GlobalStyle";
import styled from "styled-components";

export default function App() {

  return (
    <ConatinerApp>
      <GlobalStyle />
      <Header  />
      <Main />
      <Footer />
    </ConatinerApp>
  );
}

const ConatinerApp = styled.div`
  background-color: #FB6B6B
`;