import items from "../constants/items"
import arrow from "../assets/seta_play.png";
import { QuestionFace } from "../styles/styles";



export default function Question1(props) {

    const {showQuestion} = props;

    return (
        <QuestionFace>
            <h4>{items[0]}</h4>
            <img src={arrow} alt="Seta de play" onClick={() => showQuestion()}/>
        </QuestionFace>
    );
}
