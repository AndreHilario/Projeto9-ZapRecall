import ArrowTurn from "../assets/seta_virar.png";
import cards from "../constants/cards";
import { useState } from "react";
import { Options } from "../styles/styles";
import { RedOption } from "../styles/styles";
import { OrangeOption } from "../styles/styles";
import { GreenOption } from "../styles/styles";
import { MainContent } from "../styles/styles";
import { QuestionBack } from "../styles/styles";

export default function DiscoverQuestion7() {

    const [newAnswer7, setNewAnswer7] = useState(true);
    const [showOptions, setShowOptions] = useState("");

    function showAnswer7() {
        setNewAnswer7(false);
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
                <p>{!newAnswer7 ? cards[6].answer : cards[6].question}</p>
                {newAnswer7 ? <img src={ArrowTurn} onClick={showAnswer7} /> : ""}
                {showOptions}
            </QuestionBack>
        </MainContent>


    );
};