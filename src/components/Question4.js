import items from "../constants/items";
import { QuestionFace } from "../styles/styles";
import arrow from "../assets/seta_play.png";
import error from "../assets/icone_erro.png"

export default function Question4(props) {

    const {showQuestion4, endImage} = props;

    return (
        <QuestionFace finished={endImage}>
            <h4>{items[3]}</h4>
            <img src={endImage ? arrow : error} alt="Seta de play" onClick={showQuestion4}/>
        </QuestionFace>
    );
};