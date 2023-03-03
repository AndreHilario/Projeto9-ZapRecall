import Header from "./constants/Header";
import Main from "./components/Main";
import GlobalStyle from "./styles/GlobalStyle";
import { ContainerApp } from "./styles/styles";

export default function App() {

  return (
    <ContainerApp>
      <GlobalStyle />
      <Header />
      <Main />
    </ContainerApp>
  );
};