import items from "../constants/items"
import { QuestionFace } from "../styles/styles";
import arrow from "../assets/seta_play.png";
import error from "../assets/icone_erro.png"

export default function Question6(props) {

    const {showQuestion6, endImage} = props;

    return (
        <QuestionFace finished={endImage}>
            <h4>{items[5]}</h4>
            <img src={endImage ? arrow : error} alt="Seta de play" onClick={showQuestion6}/>
        </QuestionFace>
    );
};