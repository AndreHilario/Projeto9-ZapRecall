import { useState } from "react";
import { MainContent } from "../styles/styles";
import Footer from "./Footer";
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";
import Question4 from "./Question4";
import Question5 from "./Question5";
import Question6 from "./Question6";
import Question7 from "./Question7";
import Question8 from "./Question8";
import DiscoverQuestion1 from "./DiscoverQuestion1";
import DiscoverQuestion2 from "./DiscoverQuestion2";
import DiscoverQuestion3 from "./DiscoverQuestion3";
import DiscoverQuestion4 from "./DiscoverQuestion4";
import DiscoverQuestion5 from "./DiscoverQuestion5";
import DiscoverQuestion6 from "./DiscoverQuestion6";
import DiscoverQuestion7 from "./DiscoverQuestion7";
import DiscoverQuestion8 from "./DiscoverQuestion8";


export default function Main() {

    const [image, setImage] = useState("");
    const [newQuestion1, setNewQuestion1] = useState(<Question1 showQuestion={showQuestion} image={image} />);
    const [newQuestion2, setNewQuestion2] = useState(<Question2 showQuestion2={showQuestion2} image={image} />);
    const [newQuestion3, setNewQuestion3] = useState(<Question3 showQuestion3={showQuestion3} image={image} />);
    const [newQuestion4, setNewQuestion4] = useState(<Question4 showQuestion4={showQuestion4} image={image} />);
    const [newQuestion5, setNewQuestion5] = useState(<Question5 showQuestion5={showQuestion5} image={image} />);
    const [newQuestion6, setNewQuestion6] = useState(<Question6 showQuestion6={showQuestion6} image={image} />);
    const [newQuestion7, setNewQuestion7] = useState(<Question7 showQuestion7={showQuestion7} image={image} />);
    const [newQuestion8, setNewQuestion8] = useState(<Question8 showQuestion8={showQuestion8} image={image} />);

    const [counterFinished, setCounterFinished] = useState(0);
    let finishedNumber = 0;

    function endTest() {
        let erro = "error";
        setImage(erro);
        finishedNumber++;
        setCounterFinished(finishedNumber);
        const newQuestion = <Question1 image={erro} />;
        setNewQuestion1(newQuestion);
    }
    function endTest2() {
        let erro = "error";
        setImage(erro);
        finishedNumber++;
        setCounterFinished(finishedNumber);
        const newQuestion = <Question2 image={erro} />;
        setNewQuestion2(newQuestion);
    }
    function endTest3() {
        let erro = "error";
        setImage(erro);
        finishedNumber++;
        setCounterFinished(finishedNumber);
        const newQuestion = <Question3 image={erro} />;
        setNewQuestion3(newQuestion);
    }
    function endTest4() {
        let erro = "error";
        setImage(erro);
        finishedNumber++;
        setCounterFinished(finishedNumber);
        const newQuestion = <Question4 image={erro} />;
        setNewQuestion4(newQuestion);
    }
    function endTest5() {
        let erro = "error";
        setImage(erro);
        finishedNumber++;
        setCounterFinished(finishedNumber);
        const newQuestion = <Question5 image={erro} />;
        setNewQuestion5(newQuestion);
    }
    function endTest6() {
        let erro = "error";
        setImage(erro);
        finishedNumber++;
        setCounterFinished(finishedNumber);
        const newQuestion = <Question6 image={erro} />;
        setNewQuestion6(newQuestion);
    }
    function endTest7() {
        let erro = "error";
        setImage(erro);
        finishedNumber++;
        setCounterFinished(finishedNumber);
        const newQuestion = <Question7 image={erro} />;
        setNewQuestion7(newQuestion);
    }
    function endTest8() {
        let erro = "error";
        setImage(erro);
        finishedNumber++;
        setCounterFinished(finishedNumber);
        const newQuestion = <Question8 image={erro} />;
        setNewQuestion8(newQuestion);
    }

    function endAlmost() {
        let medium = "almost";
        setImage(medium);
        finishedNumber++;
        setCounterFinished(finishedNumber);
        const newQuestion = <Question1 image={medium} />;
        setNewQuestion1(newQuestion);
    }
    function endAlmost2() {
        let medium = "almost";
        setImage(medium);
        finishedNumber++;
        setCounterFinished(finishedNumber);
        const newQuestion = <Question2 image={medium} />;
        setNewQuestion2(newQuestion);
    }
    function endAlmost3() {
        let medium = "almost";
        setImage(medium);
        finishedNumber++;
        setCounterFinished(finishedNumber);
        const newQuestion = <Question3 image={medium} />;
        setNewQuestion3(newQuestion);
    }
    function endAlmost4() {
        let medium = "almost";
        setImage(medium);
        finishedNumber++;
        setCounterFinished(finishedNumber);
        const newQuestion = <Question4 image={medium} />;
        setNewQuestion4(newQuestion);
    }
    function endAlmost5() {
        let medium = "almost";
        setImage(medium);
        finishedNumber++;
        setCounterFinished(finishedNumber);
        const newQuestion = <Question5 image={medium} />;
        setNewQuestion5(newQuestion);
    }
    function endAlmost6() {
        let medium = "almost";
        setImage(medium);
        finishedNumber++;
        setCounterFinished(finishedNumber);
        const newQuestion = <Question6 image={medium} />;
        setNewQuestion6(newQuestion);
    }
    function endAlmost7() {
        let medium = "almost";
        setImage(medium);
        finishedNumber++;
        setCounterFinished(finishedNumber);
        const newQuestion = <Question7 image={medium} />;
        setNewQuestion7(newQuestion);
    }
    function endAlmost8() {
        let medium = "almost";
        setImage(medium);
        finishedNumber++;
        setCounterFinished(finishedNumber);
        const newQuestion = <Question8 image={medium} />;
        setNewQuestion8(newQuestion);
    }
    function endRemember() {
        let perfect = "correct";
        setImage(perfect);
        finishedNumber++;
        setCounterFinished(finishedNumber);
        const newQuestion = <Question1 image={perfect} />;
        setNewQuestion1(newQuestion);
    }
    function endRemember2() {
        let perfect = "correct";
        setImage(perfect);
        finishedNumber++;
        setCounterFinished(finishedNumber);
        const newQuestion = <Question2 image={perfect} />;
        setNewQuestion2(newQuestion);
    }
    function endRemember3() {
        let perfect = "correct";
        setImage(perfect);
        finishedNumber++;
        setCounterFinished(finishedNumber);
        const newQuestion = <Question3 image={perfect} />;
        setNewQuestion3(newQuestion);
    }
    function endRemember4() {
        let perfect = "correct";
        setImage(perfect);
        finishedNumber++;
        setCounterFinished(finishedNumber);
        const newQuestion = <Question4 image={perfect} />;
        setNewQuestion4(newQuestion);
    }
    function endRemember5() {
        let perfect = "correct";
        setImage(perfect);
        finishedNumber++;
        setCounterFinished(finishedNumber);
        const newQuestion = <Question5 image={perfect} />;
        setNewQuestion5(newQuestion);
    }
    function endRemember6() {
        let perfect = "correct";
        setImage(perfect);
        finishedNumber++;
        setCounterFinished(finishedNumber);
        const newQuestion = <Question6 image={perfect} />;
        setNewQuestion6(newQuestion);
    }
    function endRemember7() {
        let perfect = "correct";
        setImage(perfect);
        finishedNumber++;
        setCounterFinished(finishedNumber);
        const newQuestion = <Question7 image={perfect} />;
        setNewQuestion7(newQuestion);
    }
    function endRemember8() {
        let perfect = "correct";
        setImage(perfect);
        finishedNumber++;
        setCounterFinished(finishedNumber);
        const newQuestion = <Question8 image={perfect} />;
        setNewQuestion8(newQuestion);
    }
    function showQuestion() {
        setNewQuestion1(<DiscoverQuestion1 endTest={endTest} endAlmost={endAlmost} endRemember={endRemember} />)
    }
    function showQuestion2() {
        setNewQuestion2(<DiscoverQuestion2 endTest2={endTest2} endAlmost2={endAlmost2} endRemember2={endRemember2} />)
    }
    function showQuestion3() {
        setNewQuestion3(<DiscoverQuestion3 endTest3={endTest3} endAlmost3={endAlmost3} endRemember3={endRemember3} />)
    }
    function showQuestion4() {
        setNewQuestion4(<DiscoverQuestion4 endTest4={endTest4} endAlmost4={endAlmost4} endRemember4={endRemember4} />)
    }
    function showQuestion5() {
        setNewQuestion5(<DiscoverQuestion5 endTest5={endTest5} endAlmost5={endAlmost5} endRemember5={endRemember5} />)
    }
    function showQuestion6() {
        setNewQuestion6(<DiscoverQuestion6 endTest6={endTest6} endAlmost6={endAlmost6} endRemember6={endRemember6} />)
    }
    function showQuestion7() {
        setNewQuestion7(<DiscoverQuestion7 endTest7={endTest7} endAlmost7={endAlmost7} endRemember7={endRemember7} />)
    }
    function showQuestion8() {
        setNewQuestion8(<DiscoverQuestion8 endTest8={endTest8} endAlmost8={endAlmost8} endRemember8={endRemember8} />)
    }

    return (
        <MainContent>
            {newQuestion1}
            {newQuestion2}
            {newQuestion3}
            {newQuestion4}
            {newQuestion5}
            {newQuestion6}
            {newQuestion7}
            {newQuestion8}
            <Footer counterFinished={counterFinished} />
        </MainContent>
    );
};