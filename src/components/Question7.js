import items from "../constants/items"
import { QuestionFace } from "../styles/styles";
import arrow from "../assets/seta_play.png";
import error from "../assets/icone_erro.png"

export default function Question7(props) {

    const {showQuestion7, endImage} = props;

    return (
        <QuestionFace data-test="flashcard" finished={endImage}>
            <h4 data-test="flashcard-text" >{items[6]}</h4>
            <img data-test="play-btn" src={endImage ? arrow : error} alt="Seta de play" onClick={showQuestion7}/>
        </QuestionFace>
    );
};