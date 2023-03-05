import ArrowTurn from "../assets/seta_virar.png";
import cards from "../constants/cards";
import { useState } from "react";
import { Options } from "../styles/styles";
import { RedOption } from "../styles/styles";
import { OrangeOption } from "../styles/styles";
import { GreenOption } from "../styles/styles";
import { MainContent } from "../styles/styles";
import { QuestionBack } from "../styles/styles";
import Question8 from "./Question8";

export default function DiscoverQuestion8(props) {

    const { updateFinishedNumber, setNewQuestion8, setImage } = props;

    const [newAnswer8, setNewAnswer8] = useState(true);
    const [showOptions, setShowOptions] = useState("");

    function showAnswer8() {
        setNewAnswer8(false);
        setShowOptions(
            <Options>
                <RedOption data-test="no-btn" onClick={() => endTest8()}>Não lembrei</RedOption>
                <OrangeOption data-test="partial-btn" onClick={() => endAlmost8()}>Quase não lembrei</OrangeOption>
                <GreenOption data-test="zap-btn" onClick={() => endRemember8()}>Zap!</GreenOption>
            </Options>)
    }
    function endTest8() {
        const erro = "error";
        setImage(erro);
        updateFinishedNumber();
        const newQuestion = <Question8 image={erro} />;
        setNewQuestion8(newQuestion);
    }
    function endAlmost8() {
        const medium = "almost";
        setImage(medium);
        updateFinishedNumber();
        const newQuestion = <Question8 image={medium} />;
        setNewQuestion8(newQuestion);
    }
    function endRemember8() {
        const perfect = "correct";
        setImage(perfect);
        updateFinishedNumber();
        const newQuestion = <Question8 image={perfect} />;
        setNewQuestion8(newQuestion);
    }

    return (
        <MainContent>
            <QuestionBack data-test="flashcard">
                <p data-test="flashcard-text">{!newAnswer8 ? cards[7].answer : cards[7].question}</p>
                {newAnswer8 ? <img data-test="turn-btn" src={ArrowTurn} alt="Seta de virar" onClick={showAnswer8} /> : ""}
                {showOptions}
            </QuestionBack>
        </MainContent>


    );
};