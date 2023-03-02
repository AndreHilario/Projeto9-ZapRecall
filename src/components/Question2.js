import items from "../constants/items"
import { QuestionFace } from "../styles/styles";
import arrow from "../assets/seta_play.png";

export default function Question2(props) {

    const {showQuestion2} = props;

    return (
        <QuestionFace>
            <h4>{items[1]}</h4>
            <img src={arrow} alt="Seta de play" onClick={() => showQuestion2()}/>
        </QuestionFace>
    );
};