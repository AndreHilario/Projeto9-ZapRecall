import items from "../constants/items"
import { QuestionFace } from "../styles/styles";
import arrow from "../assets/seta_play.png";

export default function Question8(props) {

    const {showQuestion8} = props;

    return (
        <QuestionFace>
            <h4>{items[7]}</h4>
            <img src={arrow} alt="Seta de play" onClick={showQuestion8}/>
        </QuestionFace>
    );
};