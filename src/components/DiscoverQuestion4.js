import ArrowTurn from "../assets/seta_virar.png";
import cards from "../constants/cards";
import { useState } from "react";
import { Options } from "../styles/styles";
import { RedOption } from "../styles/styles";
import { OrangeOption } from "../styles/styles";
import { GreenOption } from "../styles/styles";
import { MainContent } from "../styles/styles";
import { QuestionBack } from "../styles/styles";

export default function DiscoverQuestion4(props) {

    const {endTest4 , endAlmost4, endRemember4} = props;

    const [newAnswer4, setNewAnswer4] = useState(true);
    const [showOptions, setShowOptions] = useState("");
    
    function showAnswer4(){
        setNewAnswer4(false);
        setShowOptions(
            <Options>
                <RedOption data-test="no-btn" onClick={() => endTest4()}>Não lembrei</RedOption> 
                <OrangeOption data-test="partial-btn" onClick={() => endAlmost4()}>Quase não lembrei</OrangeOption> 
                <GreenOption data-test="zap-btn" onClick={() => endRemember4()}>Zap!</GreenOption>
            </Options>)
    }

    return (
        <MainContent>
            <QuestionBack data-test="flashcard">
                <p data-test="flashcard-text">{!newAnswer4 ? cards[3].answer : cards[3].question}</p>
                {newAnswer4 ? <img data-test="turn-btn" src={ArrowTurn} onClick={showAnswer4} /> : ""}
                {showOptions}
            </QuestionBack>
        </MainContent>
        

    );
};