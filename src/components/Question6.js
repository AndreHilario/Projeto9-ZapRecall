import items from "../constants/items"
import styled from "styled-components";
import arrow from "../assets/seta_play.png";

export default function Question6(props) {

    const {showQuestion6} = props;

    return (
        <QuestionFace6>
            <h4>{items[5]}</h4>
            <img src={arrow} alt="Seta de play" onClick={showQuestion6}/>
        </QuestionFace6>
    );
}

const QuestionFace6 = styled.div`
    background-color: #FFFFFF;
    width: 300px;
    height: 65px;
    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    margin: 25px auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
    h4 {
        color: #333333;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        margin-left: 15px;
    }
    img {
        width: 20px;
        height: 23px;
        margin-right: 22px;

    }

`