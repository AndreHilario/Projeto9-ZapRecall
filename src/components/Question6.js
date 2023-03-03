import items from "../constants/items";
import { QuestionFace } from "../styles/styles";
import arrow from "../assets/seta_play.png";
import error from "../assets/icone_erro.png";
import almost from "../assets/icone_quase.png";
import correct from "../assets/icone_certo.png";


export default function Question6(props) {

    const { showQuestion6, image } = props;

    return (
        <QuestionFace data-test="flashcard" red={image === "error"} orange={image === "almost"} green={image === "correct"} endTest={image === ""}>
            <h4 data-test="flashcard-text">{items[5]}</h4>
            {image === "" && <img data-test="play-btn" src={arrow} alt="Seta de play" onClick={() => showQuestion6()} />}
            {image === "error" && <img data-test="no-icon" src={error} alt="Imagem de erro" />}
            {image === "almost" && <img data-test="partial-icon" src={almost} alt="Imagem de quase lembrou" />}
            {image === "correct" && <img data-test="zap-icon" src={correct} alt="Imagem de correto" />}
        </QuestionFace>
    );
}