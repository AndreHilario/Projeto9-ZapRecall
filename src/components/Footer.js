import { FooterContent } from "../styles/styles";
import cards from "../constants/cards";
export default function Footer(props) {

    const { counterFinished } = props;

    return (
        <FooterContent data-test="footer">
            <p>{counterFinished}/{cards.length} CONCLUÍDOS</p>
        </FooterContent>
    );
};