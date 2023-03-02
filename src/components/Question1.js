import items from "../constants/items"
import arrow from "../assets/seta_play.png";
import error from "../assets/icone_erro.png"
import { QuestionFace } from "../styles/styles";



export default function Question1(props) {

    const {showQuestion, endImage} = props;

    return (
        <QuestionFace finished={endImage}>
            <h4>{items[0]}</h4>
            <img src={endImage ? arrow : error} alt="Seta de play" onClick={() => showQuestion()}/>
        </QuestionFace>
    );
};