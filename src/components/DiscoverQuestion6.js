import ArrowTurn from "../assets/seta_virar.png";
import cards from "../constants/cards";
import { useState } from "react";
import { Options } from "../styles/styles";
import { RedOption } from "../styles/styles";
import { OrangeOption } from "../styles/styles";
import { GreenOption } from "../styles/styles";
import { MainContent } from "../styles/styles";
import { QuestionBack } from "../styles/styles";
import Question6 from "./Question6";

export default function DiscoverQuestion6(props) {

    const { updateFinishedNumber, setNewQuestion6, setImage } = props;

    const [newAnswer6, setNewAnswer6] = useState(true);
    const [showOptions, setShowOptions] = useState("");

    function showAnswer6() {
        setNewAnswer6(false);
        setShowOptions(
            <Options>
                <RedOption data-test="no-btn" onClick={() => endTest6()}>Não lembrei</RedOption>
                <OrangeOption data-test="partial-btn" onClick={() => endAlmost6()}>Quase não lembrei</OrangeOption>
                <GreenOption data-test="zap-btn" onClick={() => endRemember6()}>Zap!</GreenOption>
            </Options>)
    }
    function endTest6() {
        const erro = "error";
        setImage(erro);
        updateFinishedNumber();
        const newQuestion = <Question6 image={erro} />;
        setNewQuestion6(newQuestion);
    }
    function endAlmost6() {
        const medium = "almost";
        setImage(medium);
        updateFinishedNumber();
        const newQuestion = <Question6 image={medium} />;
        setNewQuestion6(newQuestion);
    }
    function endRemember6() {
        const perfect = "correct";
        setImage(perfect);
        updateFinishedNumber();
        const newQuestion = <Question6 image={perfect} />;
        setNewQuestion6(newQuestion);
    }

    return (
        <MainContent>
            <QuestionBack data-test="flashcard">
                <p data-test="flashcard-text">{!newAnswer6 ? cards[5].answer : cards[5].question}</p>
                {newAnswer6 ? <img data-test="turn-btn" src={ArrowTurn} alt="Seta de virar" onClick={showAnswer6} /> : ""}
                {showOptions}
            </QuestionBack>
        </MainContent>


    );
};