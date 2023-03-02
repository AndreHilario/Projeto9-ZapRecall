import ArrowTurn from "../assets/seta_virar.png";
import cards from "../constants/cards";
import { useState } from "react";
import { Options } from "../styles/styles";
import { RedOption } from "../styles/styles";
import { OrangeOption } from "../styles/styles";
import { GreenOption } from "../styles/styles";
import { MainContent } from "../styles/styles";
import { QuestionBack } from "../styles/styles";

export default function DiscoverQuestion2(props) {

    const {endTest2} = props;

    const [newAnswer2, setNewAnswer2] = useState(true);
    const [showOptions, setShowOptions] = useState("");
    
    function showAnswer2(){
        setNewAnswer2(false);
        setShowOptions(
            <Options>
                <RedOption data-test="no-btn" onClick={() => endTest2()}>Não lembrei</RedOption> 
                <OrangeOption data-test="partial-btn">Quase não lembrei</OrangeOption> 
                <GreenOption data-test="zap-btn">Zap!</GreenOption>
            </Options>)
    }

    return (
        <MainContent>
            <QuestionBack>
                <p data-test="flashcard-text">{!newAnswer2 ? cards[1].answer : cards[1].question}</p>
                {newAnswer2 ? <img data-test="turn-btn" src={ArrowTurn} onClick={showAnswer2} /> : ""}
                {showOptions}
            </QuestionBack>
        </MainContent>
        

    );
};