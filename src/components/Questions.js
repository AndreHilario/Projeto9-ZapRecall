import styled from "styled-components";
import ArrowTurn from "../assets/seta_virar.png";
import cards from "../constants/cards";

export default function Questions(props) {

    const {newAnswer, showAnswer} = props;

    return (
        <MainContent2>
            {cards.map((c, i) =>
                <QuestionBack>
                    <p>{!newAnswer ? c.question : c.answer}</p>
                    <img src={ArrowTurn} onClick={() => showAnswer(i)} />
                </QuestionBack>
            )}
        </MainContent2>
    );
}
const MainContent2 = styled.main`
    font-family: 'Recursive', sans-serif;
`
const QuestionBack = styled.div`
    background-color: #FFFFD4;
    width: 300px;
    min-height: 131px;
    max-height: 170px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin: 25px auto;


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
        width: 30px;
        height: 20px;

        position: absolute;
        bottom: 6px;
        right: 15px;
    }
`