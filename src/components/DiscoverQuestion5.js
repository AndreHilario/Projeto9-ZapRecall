import ArrowTurn from "../assets/seta_virar.png";
import cards from "../constants/cards";
import { useState } from "react";
import { Options } from "../styles/styles";
import { RedOption } from "../styles/styles";
import { OrangeOption } from "../styles/styles";
import { GreenOption } from "../styles/styles";
import { MainContent } from "../styles/styles";
import { QuestionBack } from "../styles/styles";

export default function DiscoverQuestion5(props) {

    const {endTest5, endAlmost5, endRemember5} = props;

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

    return (
        <MainContent>
            <QuestionBack data-test="flashcard">
                <p data-test="flashcard-text">{!newAnswer5 ? cards[4].answer : cards[4].question}</p>
                {newAnswer5 ? <img data-test="turn-btn" src={ArrowTurn} onClick={showAnswer5} /> : ""}
                {showOptions}
            </QuestionBack>
        </MainContent>


    );
};