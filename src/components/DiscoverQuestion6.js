import ArrowTurn from "../assets/seta_virar.png";
import cards from "../constants/cards";
import { useState } from "react";
import { Options } from "../styles/styles";
import { RedOption } from "../styles/styles";
import { OrangeOption } from "../styles/styles";
import { GreenOption } from "../styles/styles";
import { MainContent } from "../styles/styles";
import { QuestionBack } from "../styles/styles";

export default function DiscoverQuestion6(props) {

    const {endTest6} = props;

    const [newAnswer6, setNewAnswer6] = useState(true);
    const [showOptions, setShowOptions] = useState(""); 

    function showAnswer6() {
        setNewAnswer6(false);
        setShowOptions(
            <Options>
                <RedOption onClick={() => endTest6()}>Não lembrei</RedOption>
                <OrangeOption>Quase não lembrei</OrangeOption>
                <GreenOption>Zap!</GreenOption>
            </Options>)
    }

    return (
        <MainContent>
            <QuestionBack>
                <p>{!newAnswer6 ? cards[5].answer : cards[5].question}</p>
                {newAnswer6 ? <img src={ArrowTurn} onClick={showAnswer6} /> : ""}
                {showOptions}
            </QuestionBack>
        </MainContent>


    );
};