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
                <RedOption onClick={() => endTest2()}>Não lembrei</RedOption> 
                <OrangeOption>Quase não lembrei</OrangeOption> 
                <GreenOption>Zap!</GreenOption>
            </Options>)
    }

    return (
        <MainContent>
            <QuestionBack>
                <p>{!newAnswer2 ? cards[1].answer : cards[1].question}</p>
                {newAnswer2 ? <img src={ArrowTurn} onClick={showAnswer2} /> : ""}
                {showOptions}
            </QuestionBack>
        </MainContent>
        

    );
};