import ArrowTurn from "../assets/seta_virar.png";
import cards from "../constants/cards";
import { useState } from "react";
import { Options } from "../styles/styles";
import { RedOption } from "../styles/styles";
import { OrangeOption } from "../styles/styles";
import { GreenOption } from "../styles/styles";
import { MainContent } from "../styles/styles";
import { QuestionBack } from "../styles/styles";

export default function DiscoverQuestion5() {

    const [newAnswer5, setNewAnswer5] = useState(true);
    const [showOptions, setShowOptions] = useState("");

    function showAnswer5() {
        setNewAnswer5(false);
        setShowOptions(
            <Options>
                <RedOption>Não lembrei</RedOption>
                <OrangeOption>Quase não lembrei</OrangeOption>
                <GreenOption>Zap!</GreenOption>
            </Options>)
    }

    return (
        <MainContent>
            <QuestionBack>
                <p>{!newAnswer5 ? cards[4].answer : cards[4].question}</p>
                {newAnswer5 ? <img src={ArrowTurn} onClick={showAnswer5} /> : ""}
                {showOptions}
            </QuestionBack>
        </MainContent>


    );
};