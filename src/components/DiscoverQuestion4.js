import ArrowTurn from "../assets/seta_virar.png";
import cards from "../constants/cards";
import { useState } from "react";
import { Options } from "../styles/styles";
import { RedOption } from "../styles/styles";
import { OrangeOption } from "../styles/styles";
import { GreenOption } from "../styles/styles";
import { MainContent } from "../styles/styles";
import { QuestionBack } from "../styles/styles";
import Question4 from "./Question4";

export default function DiscoverQuestion4(props) {

    const { updateFinishedNumber, setNewQuestion4, setImage } = props;

    const [newAnswer4, setNewAnswer4] = useState(true);
    const [showOptions, setShowOptions] = useState("");

    function showAnswer4() {
        setNewAnswer4(false);
        setShowOptions(
            <Options>
                <RedOption data-test="no-btn" onClick={() => endTest4()}>Não lembrei</RedOption>
                <OrangeOption data-test="partial-btn" onClick={() => endAlmost4()}>Quase não lembrei</OrangeOption>
                <GreenOption data-test="zap-btn" onClick={() => endRemember4()}>Zap!</GreenOption>
            </Options>)
    }
    function endTest4() {
        const erro = "error";
        setImage(erro);
        updateFinishedNumber();
        const newQuestion = <Question4 image={erro} />;
        setNewQuestion4(newQuestion);
    }
    function endAlmost4() {
        const medium = "almost";
        setImage(medium);
        updateFinishedNumber();
        const newQuestion = <Question4 image={medium} />;
        setNewQuestion4(newQuestion);
    }
    function endRemember4() {
        const perfect = "correct";
        setImage(perfect);
        updateFinishedNumber();
        const newQuestion = <Question4 image={perfect} />;
        setNewQuestion4(newQuestion);
    }
    return (
        <MainContent>
            <QuestionBack data-test="flashcard">
                <p data-test="flashcard-text">{!newAnswer4 ? cards[3].answer : cards[3].question}</p>
                {newAnswer4 ? <img data-test="turn-btn" src={ArrowTurn} alt="Seta de virar" onClick={showAnswer4} /> : ""}
                {showOptions}
            </QuestionBack>
        </MainContent>


    );
};