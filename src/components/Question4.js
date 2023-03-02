import items from "../constants/items";
import { QuestionFace } from "../styles/styles";
import arrow from "../assets/seta_play.png";

export default function Question4(props) {

    const {showQuestion4} = props;

    return (
        <QuestionFace>
            <h4>{items[3]}</h4>
            <img src={arrow} alt="Seta de play" onClick={showQuestion4}/>
        </QuestionFace>
    );
};