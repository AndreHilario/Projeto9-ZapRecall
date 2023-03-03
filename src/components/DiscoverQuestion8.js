import ArrowTurn from "../assets/seta_virar.png";
import cards from "../constants/cards";
import { useState } from "react";
import { Options } from "../styles/styles";
import { RedOption } from "../styles/styles";
import { OrangeOption } from "../styles/styles";
import { GreenOption } from "../styles/styles";
import { MainContent } from "../styles/styles";
import { QuestionBack } from "../styles/styles";

export default function DiscoverQuestion8(props) {

    const {endTest8 , endAlmost8, endRemember8} = props

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

    return (
        <MainContent>
            <QuestionBack data-test="flashcard">
                <p data-test="flashcard-text">{!newAnswer8 ? cards[7].answer : cards[7].question}</p>
                {newAnswer8 ? <img data-test="turn-btn" src={ArrowTurn} onClick={showAnswer8} /> : ""}
                {showOptions}
            </QuestionBack>
        </MainContent>


    );
};