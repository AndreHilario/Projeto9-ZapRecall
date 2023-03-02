import ArrowTurn from "../assets/seta_virar.png";
import cards from "../constants/cards";
import { useState } from "react";
import { Options } from "../styles/styles";
import { RedOption } from "../styles/styles";
import { OrangeOption } from "../styles/styles";
import { GreenOption } from "../styles/styles";
import { MainContent } from "../styles/styles";
import { QuestionBack } from "../styles/styles";

export default function DiscoverQuestion3(props) {
    
    const {endTest3} = props;

    const [newAnswer3, setNewAnswer3] = useState(true);
    const [showOptions, setShowOptions] = useState("");
    
    function showAnswer3(){
        setNewAnswer3(false);
        setShowOptions(
        <Options>
            <RedOption data-test="no-btn" onClick={() => endTest3()}>Não lembrei</RedOption> 
            <OrangeOption data-test="partial-btn">Quase não lembrei</OrangeOption> 
            <GreenOption data-test="zap-btn">Zap!</GreenOption>
        </Options>)
    }

    return (
        <MainContent>
            <QuestionBack data-test="flashcard">
                <p data-test="flashcard-text">{!newAnswer3 ? cards[2].answer : cards[2].question}</p>
                {newAnswer3 ? <img data-test="turn-btn" src={ArrowTurn} onClick={showAnswer3} /> : ""}
                {showOptions}
            </QuestionBack>
        </MainContent>
    );
};