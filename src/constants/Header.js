import logo from "../assets/logo.png"
import { HeaderContent } from "../styles/styles";

export default function Header() {
    return (
        <HeaderContent>
            <img src={logo} alt="Logo do ZapRecall" />
            <h1>ZapRecall</h1>
        </HeaderContent>
    );
}
