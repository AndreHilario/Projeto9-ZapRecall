import ArrowTurn from "../assets/seta_virar.png";
import cards from "../constants/cards";
import { useState } from "react";
import { Options } from "../styles/styles";
import { RedOption } from "../styles/styles";
import { OrangeOption } from "../styles/styles";
import { GreenOption } from "../styles/styles";
import { MainContent } from "../styles/styles";
import { QuestionBack } from "../styles/styles";

export default function DiscoverQuestion4() {

    const [newAnswer4, setNewAnswer4] = useState(true);
    const [showOptions, setShowOptions] = useState("");
    
    function showAnswer4(){
        setNewAnswer4(false);
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
                <p>{!newAnswer4 ? cards[3].answer : cards[3].question}</p>
                {newAnswer4 ? <img src={ArrowTurn} onClick={showAnswer4} /> : ""}
                {showOptions}
            </QuestionBack>
        </MainContent>
        

    );
};