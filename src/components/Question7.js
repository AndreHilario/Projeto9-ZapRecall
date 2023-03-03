import items from "../constants/items"
import { QuestionFace } from "../styles/styles";
import arrow from "../assets/seta_play.png";
import error from "../assets/icone_erro.png";
import almost from "../assets/icone_quase.png";
import correct from "../assets/icone_certo.png";

export default function Question7(props) {

    const { showQuestion7, image } = props
    

    return (
        <QuestionFace data-test="flashcard">
            <h4 data-test="flashcard-text">{items[6]}</h4>
            {image === "" && <img data-test="play-btn" src={arrow} alt="Seta de play" onClick={() => showQuestion7()} />}
            {image === "error" && <img src={error} alt="Imagem de erro" />}
            {image === "almost" && <img src={almost} alt="Imagem de quase lembrou" />}
            {image === "correct" && <img src={correct} alt="Imagem de correto" />}
        </QuestionFace>
    );
};