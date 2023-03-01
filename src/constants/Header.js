import logo from "../assets/logo.png"
import styled from "styled-components";

export default function Header() {
    return (
        <HeaderContent>
            <img src={logo} alt="Logo do ZapRecall" />
            <h1>ZapRecall</h1>
        </HeaderContent>
    );
}

const HeaderContent = styled.header`
    margin: 42px auto;
    width: 256px;
    height: 60px;
    display: flex;
    align-items: center;
    img {
        width: 52px;
        height: 60px;
        margin-right: 20px;
    }
    h1 {
        color: #FFFFFF;
        font-family: 'Righteous', cursive;
        font-size: 36px;
        font-weight: 400;
        line-height: 44px;
    }
`