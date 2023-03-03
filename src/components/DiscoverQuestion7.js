import ArrowTurn from "../assets/seta_virar.png";
import cards from "../constants/cards";
import { useState } from "react";
import { Options } from "../styles/styles";
import { RedOption } from "../styles/styles";
import { OrangeOption } from "../styles/styles";
import { GreenOption } from "../styles/styles";
import { MainContent } from "../styles/styles";
import { QuestionBack } from "../styles/styles";
import Question7 from "./Question7";

export default function DiscoverQuestion7(props) {

    const { updateFinishedNumber, setNewQuestion7, setImage } = props;

    const [newAnswer7, setNewAnswer7] = useState(true);
    const [showOptions, setShowOptions] = useState("");

    function showAnswer7() {
        setNewAnswer7(false);
        setShowOptions(
            <Options>
                <RedOption data-test="no-btn" onClick={() => endTest7()}>Não lembrei</RedOption>
                <OrangeOption data-test="partial-btn" onClick={() => endAlmost7()}>Quase não lembrei</OrangeOption>
                <GreenOption data-test="zap-btn" onClick={() => endRemember7()}>Zap!</GreenOption>
            </Options>)
    }
    function endTest7() {
        const erro = "error";
        setImage(erro);
        updateFinishedNumber();
        const newQuestion = <Question7 image={erro} />;
        setNewQuestion7(newQuestion);
    }
    function endAlmost7() {
        const medium = "almost";
        setImage(medium);
        updateFinishedNumber();
        const newQuestion = <Question7 image={medium} />;
        setNewQuestion7(newQuestion);
    }
    function endRemember7() {
        const perfect = "correct";
        setImage(perfect);
        updateFinishedNumber();
        const newQuestion = <Question7 image={perfect} />;
        setNewQuestion7(newQuestion);
    }

    return (
        <MainContent>
            <QuestionBack data-test="flashcard">
                <p data-test="flashcard-text">{!newAnswer7 ? cards[6].answer : cards[6].question}</p>
                {newAnswer7 ? <img data-test="turn-btn" src={ArrowTurn} onClick={showAnswer7} /> : ""}
                {showOptions}
            </QuestionBack>
        </MainContent>


    );
};