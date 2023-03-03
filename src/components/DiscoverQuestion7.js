import ArrowTurn from "../assets/seta_virar.png";
import cards from "../constants/cards";
import { useState } from "react";
import { Options } from "../styles/styles";
import { RedOption } from "../styles/styles";
import { OrangeOption } from "../styles/styles";
import { GreenOption } from "../styles/styles";
import { MainContent } from "../styles/styles";
import { QuestionBack } from "../styles/styles";

export default function DiscoverQuestion7(props) {

    const {endTest7, endAlmost7, endRemember7} = props;

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