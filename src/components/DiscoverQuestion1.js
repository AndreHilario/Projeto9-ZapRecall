import ArrowTurn from "../assets/seta_virar.png";
import cards from "../constants/cards";
import { useState } from "react";
import { Options } from "../styles/styles";
import { RedOption } from "../styles/styles";
import { OrangeOption } from "../styles/styles";
import { GreenOption } from "../styles/styles";
import { MainContent } from "../styles/styles";
import { QuestionBack } from "../styles/styles";
import Question1 from "./Question1";

export default function DiscoverQuestion1(props) {

    const { updateFinishedNumber, setNewQuestion1, setImage } = props;

    const [newAnswer, setNewAnswer] = useState(true);
    const [showOptions, setShowOptions] = useState("");

    function showAnswer() {
        setNewAnswer(false);
        setShowOptions(
            <Options>
                <RedOption data-test="no-btn" onClick={() => endTest()}>Não lembrei</RedOption>
                <OrangeOption data-test="partial-btn" onClick={() => endAlmost()}>Quase não lembrei</OrangeOption>
                <GreenOption data-test="zap-btn" onClick={() => endRemember()}>Zap!</GreenOption>
            </Options>)
    };
    function endTest() {
        const erro = "error";
        setImage(erro);
        updateFinishedNumber();
        const newQuestion = <Question1 image={erro} />;
        setNewQuestion1(newQuestion);
    }
    function endAlmost() {
        const medium = "almost";
        setImage(medium);
        updateFinishedNumber()
        const newQuestion = <Question1 image={medium} />;
        setNewQuestion1(newQuestion);
    }
    function endRemember() {
        const perfect = "correct";
        setImage(perfect);
        updateFinishedNumber()
        const newQuestion = <Question1 image={perfect} />;
        setNewQuestion1(newQuestion);
    }
    return (
        <MainContent>
            <QuestionBack data-test="flashcard">
                <p data-test="flashcard-text">{!newAnswer ? cards[0].answer : cards[0].question}</p>
                {newAnswer ? <img data-test="turn-btn" src={ArrowTurn} onClick={showAnswer} /> : ""}
                {showOptions}
            </QuestionBack>
        </MainContent>


    );
};

