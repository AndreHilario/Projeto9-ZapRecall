import items from "../constants/items"
import { QuestionFace } from "../styles/styles";
import arrow from "../assets/seta_play.png";

export default function Question6(props) {

    const {showQuestion6} = props;

    return (
        <QuestionFace>
            <h4>{items[5]}</h4>
            <img src={arrow} alt="Seta de play" onClick={showQuestion6}/>
        </QuestionFace>
    );
};