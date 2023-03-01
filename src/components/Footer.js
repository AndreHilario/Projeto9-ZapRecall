import styled from "styled-components";

export default function Footer() {
    return (
        <FooterContent>
            <p>0/8 CONCLUÍDOS</p>
        </FooterContent>
    );
}

const FooterContent = styled.footer`
    width: 100%;
    height: 70px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    bottom: 0;
    left: 0;
    p {
        color: #333333;
        font-family: 'Recursive', sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
    }
`