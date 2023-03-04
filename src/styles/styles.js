import styled from "styled-components";

export const ContainerApp = styled.div`
    overflow-y: scroll;
    height: 1300px;
`;
export const HeaderContent = styled.header`
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
`;
export const MainContent = styled.main`
    font-family: 'Recursive', sans-serif;
`;
export const QuestionFace = styled.div`
    background-color: #FFFFFF;
    width: 300px;
    height: 65px;
    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    margin: 25px auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
    h4 {
    color: ${(props) => props.red ? "#FF3030" : props.orange ? "#FF922E" : props.green ? "#2FBE34" : "#333333"};
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    margin-left: 15px;
    text-decoration: ${(props) => props.endTest ? "none" : "line-through"};
    }
    img {
    width: 20px;
    height: 23px;
    margin-right: 22px;

    }

`;
export const QuestionBack = styled.div`
    background-color: #FFFFD4;
    width: 300px;
    min-height: 130px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin: 25px auto;
    padding-bottom: 25px;


    position: relative;
    p {
        color: #333333;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        margin: auto 15px;
        word-wrap: normal;

        position: absolute;
        top: 18px;
    }
    img {
        width: 23px;
        height: 23px;

        position: absolute;
        bottom: 6px;
        right: 15px;
    }
`;
export const Options = styled.div`
    width: 270px;
    height: 37px;
    margin: auto 15px;
    display: flex;
    justify-content: space-between;

    position: absolute;
    bottom: 10px;
`;

export const RedOption = styled.button`
    width: 85px;
    height: 37px;
    background-color: #FF3030;
    border-radius: 5px;
    border: 1px solid #FF3030;
    color: #FFFFFF;
    font-family: 'Recursive', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
`;
export const OrangeOption = styled.button`
    width: 85px;
    height: 37px;
    background-color: #FF922E;
    border-radius: 5px;
    border: 1px solid #FF922E;
    color: #FFFFFF;
    font-family: 'Recursive', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
`;
export const GreenOption = styled.button`
    width: 85px;
    height: 37px;
    background-color: #2FBE34;
    border-radius: 5px;
    border: 1px solid #2FBE34;
    color: #FFFFFF;
    font-family: 'Recursive', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
`;

export const FooterContent = styled.footer`
    width: 100%;
    height: 70px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
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
`;