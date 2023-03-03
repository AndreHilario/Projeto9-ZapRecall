import ArrowTurn from "../assets/seta_virar.png";
import cards from "../constants/cards";
import { useState } from "react";
import { Options } from "../styles/styles";
import { RedOption } from "../styles/styles";
import { OrangeOption } from "../styles/styles";
import { GreenOption } from "../styles/styles";
import { MainContent } from "../styles/styles";
import { QuestionBack } from "../styles/styles";
import Question2 from "./Question2";

export default function DiscoverQuestion2(props) {

    const { updateFinishedNumber, setNewQuestion2, setImage } = props;

    const [newAnswer2, setNewAnswer2] = useState(true);
    const [showOptions, setShowOptions] = useState("");

    function showAnswer2() {
        setNewAnswer2(false);
        setShowOptions(
            <Options>
                <RedOption data-test="no-btn" onClick={() => endTest2()}>Não lembrei</RedOption>
                <OrangeOption data-test="partial-btn" onClick={() => endAlmost2()}>Quase não lembrei</OrangeOption>
                <GreenOption data-test="zap-btn" onClick={() => endRemember2()}>Zap!</GreenOption>
            </Options>)
    }
    function endTest2() {
        const erro = "error";
        setImage(erro);
        updateFinishedNumber();
        const newQuestion = <Question2 image={erro} />;
        setNewQuestion2(newQuestion);
    }
    function endAlmost2() {
        const medium = "almost";
        setImage(medium);
        updateFinishedNumber();
        const newQuestion = <Question2 image={medium} />;
        setNewQuestion2(newQuestion);
    }
    function endRemember2() {
        const perfect = "correct";
        setImage(perfect);
        updateFinishedNumber();
        const newQuestion = <Question2 image={perfect} />;
        setNewQuestion2(newQuestion);
    }

    return (
        <MainContent>
            <QuestionBack data-test="flashcard">
                <p data-test="flashcard-text">{!newAnswer2 ? cards[1].answer : cards[1].question}</p>
                {newAnswer2 ? <img data-test="turn-btn" src={ArrowTurn} alt ="Seta de virar" onClick={showAnswer2} /> : ""}
                {showOptions}
            </QuestionBack>
        </MainContent>


    );
};