import cards from "../constants/cards";
import arrow from "../assets/seta_play.png";
import styled from "styled-components"
import Questions from "./Questions";
import { useState } from "react";

export default function Main(props) {

    const [newAnswer, setNewAnswer] = useState(false);
    const [showNewAnswer, setShowNewAnswer] = useState("")


    const {showQuestion} = props;

    function showAnswer() {
        setNewAnswer(true);
        setShowNewAnswer(<Questions newAnswer={newAnswer} showAnswer={showAnswer} />);
    }

    return (
        <MainContent>
            {cards.map((s, index) => 
                <QuestionFace>
                    <h4>Pergunta {index + 1}</h4>
                    <img onClick={() => showQuestion(s)} src={arrow} alt="Seta de play" />
                </QuestionFace>
            )};
        </MainContent>
    );
}
const MainContent = styled.main`
    font-family: 'Recursive', sans-serif;
`
const QuestionFace = styled.div`
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
        color: #333333;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        margin-left: 15px;
    }
    img {
        width: 20px;
        height: 23px;
        margin-right: 22px;

    }

`