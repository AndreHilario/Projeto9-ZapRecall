import items from "../constants/items"
import { QuestionFace } from "../styles/styles";
import arrow from "../assets/seta_play.png";

export default function Question7(props) {

    const {showQuestion7} = props;

    return (
        <QuestionFace>
            <h4>{items[6]}</h4>
            <img src={arrow} alt="Seta de play" onClick={showQuestion7}/>
        </QuestionFace>
    );
};