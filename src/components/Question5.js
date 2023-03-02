import items from "../constants/items"
import { QuestionFace } from "../styles/styles";
import arrow from "../assets/seta_play.png";

export default function Question5(props) {

    const {showQuestion5} = props;
    
    return (
        <QuestionFace>
            <h4>{items[4]}</h4>
            <img src={arrow} alt="Seta de play" onClick={showQuestion5}/>
        </QuestionFace>
    );
};