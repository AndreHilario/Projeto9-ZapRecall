import ArrowTurn from "../assets/seta_virar.png";
import cards from "../constants/cards";
import { useState } from "react";
import { Options } from "../styles/styles";
import { RedOption } from "../styles/styles";
import { OrangeOption } from "../styles/styles";
import { GreenOption } from "../styles/styles";
import { MainContent } from "../styles/styles";
import { QuestionBack } from "../styles/styles";

export default function DiscoverQuestion3() {

    const [newAnswer3, setNewAnswer3] = useState(true);
    const [showOptions, setShowOptions] = useState("");
    
    function showAnswer3(){
        setNewAnswer3(false);
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
                <p>{!newAnswer3 ? cards[2].answer : cards[2].question}</p>
                {newAnswer3 ? <img src={ArrowTurn} onClick={showAnswer3} /> : ""}
                {showOptions}
            </QuestionBack>
        </MainContent>
    );
};