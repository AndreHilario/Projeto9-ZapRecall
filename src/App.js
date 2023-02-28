import Header from "./constants/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import logo from "./assets/logo.png"

export default function App() {
  return (
    <div className="container">
      <Header logo={logo} />
      <Main />
      <Footer />
    </div>
  );
}

