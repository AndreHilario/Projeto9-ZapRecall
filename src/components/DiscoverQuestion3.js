import ArrowTurn from "../assets/seta_virar.png";
import cards from "../constants/cards";
import { useState } from "react";
import { Options } from "../styles/styles";
import { RedOption } from "../styles/styles";
import { OrangeOption } from "../styles/styles";
import { GreenOption } from "../styles/styles";
import { MainContent } from "../styles/styles";
import { QuestionBack } from "../styles/styles";
import Question3 from "./Question3";

export default function DiscoverQuestion3(props) {

    const { updateFinishedNumber, setNewQuestion3, setImage } = props;

    const [newAnswer3, setNewAnswer3] = useState(true);
    const [showOptions, setShowOptions] = useState("");

    function showAnswer3() {
        setNewAnswer3(false);
        setShowOptions(
            <Options>
                <RedOption data-test="no-btn" onClick={() => endTest3()}>Não lembrei</RedOption>
                <OrangeOption data-test="partial-btn" onClick={() => endAlmost3()}>Quase não lembrei</OrangeOption>
                <GreenOption data-test="zap-btn" onClick={() => endRemember3()}>Zap!</GreenOption>
            </Options>)
    }
    function endTest3() {
        const erro = "error";
        setImage(erro);
        updateFinishedNumber();
        const newQuestion = <Question3 image={erro} />;
        setNewQuestion3(newQuestion);
    }
    function endAlmost3() {
        const medium = "almost";
        setImage(medium);
        updateFinishedNumber();
        const newQuestion = <Question3 image={medium} />;
        setNewQuestion3(newQuestion);
    }
    function endRemember3() {
        const perfect = "correct";
        setImage(perfect);
        updateFinishedNumber();
        const newQuestion = <Question3 image={perfect} />;
        setNewQuestion3(newQuestion);
    }

    return (
        <MainContent>
            <QuestionBack data-test="flashcard">
                <p data-test="flashcard-text">{!newAnswer3 ? cards[2].answer : cards[2].question}</p>
                {newAnswer3 ? <img data-test="turn-btn" src={ArrowTurn} alt="Seta de virar" onClick={showAnswer3} /> : ""}
                {showOptions}
            </QuestionBack>
        </MainContent>
    );
};