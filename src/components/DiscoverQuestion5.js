import ArrowTurn from "../assets/seta_virar.png";
import cards from "../constants/cards";
import { useState } from "react";
import { Options } from "../styles/styles";
import { RedOption } from "../styles/styles";
import { OrangeOption } from "../styles/styles";
import { GreenOption } from "../styles/styles";
import { MainContent } from "../styles/styles";
import { QuestionBack } from "../styles/styles";
import Question5 from "./Question5";

export default function DiscoverQuestion5(props) {

    const { updateFinishedNumber, setNewQuestion5, setImage } = props;

    const [newAnswer5, setNewAnswer5] = useState(true);
    const [showOptions, setShowOptions] = useState("");

    function showAnswer5() {
        setNewAnswer5(false);
        setShowOptions(
            <Options>
                <RedOption data-test="no-btn" onClick={() => endTest5()}>Não lembrei</RedOption>
                <OrangeOption data-test="partial-btn" onClick={() => endAlmost5()}>Quase não lembrei</OrangeOption>
                <GreenOption data-test="zap-btn" onClick={() => endRemember5()}>Zap!</GreenOption>
            </Options>)
    }
    function endTest5() {
        const erro = "error";
        setImage(erro);
        updateFinishedNumber();
        const newQuestion = <Question5 image={erro} />;
        setNewQuestion5(newQuestion);
    }
    function endAlmost5() {
        const medium = "almost";
        setImage(medium);
        updateFinishedNumber();
        const newQuestion = <Question5 image={medium} />;
        setNewQuestion5(newQuestion);
    }
    function endRemember5() {
        const perfect = "correct";
        setImage(perfect);
        updateFinishedNumber();
        const newQuestion = <Question5 image={perfect} />;
        setNewQuestion5(newQuestion);
    }

    return (
        <MainContent>
            <QuestionBack data-test="flashcard">
                <p data-test="flashcard-text">{!newAnswer5 ? cards[4].answer : cards[4].question}</p>
                {newAnswer5 ? <img data-test="turn-btn" src={ArrowTurn} alt="Seta de virar" onClick={showAnswer5} /> : ""}
                {showOptions}
            </QuestionBack>
        </MainContent>


    );
};