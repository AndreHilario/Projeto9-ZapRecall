import cards from "../constants/cards";
import arrow from "../assets/seta_play.png";

export default function Main() {
    return (
        <main> 
            {cards.map((s, index) =>
                <div className="question-face">
                    <h4>Pergunta {index + 1}</h4>
                    <img src={arrow} alt="Seta de play" />
                </div>
            )};
        </main>
    );
}