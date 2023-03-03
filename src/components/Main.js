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
import DiscoverQuestion1 from "./DiscoverQuestion1";
import DiscoverQuestion2 from "./DiscoverQuestion2";
import DiscoverQuestion3 from "./DiscoverQuestion3";
import DiscoverQuestion4 from "./DiscoverQuestion4";
import DiscoverQuestion5 from "./DiscoverQuestion5";
import DiscoverQuestion6 from "./DiscoverQuestion6";
import DiscoverQuestion7 from "./DiscoverQuestion7";

export default function Main() {

    const [image, setImage] = useState("");
    const [newQuestion1, setNewQuestion1] = useState(<Question1 showQuestion={showQuestion} image={image} />);
    const [newQuestion2, setNewQuestion2] = useState(<Question2 showQuestion2={showQuestion2} image={image} />);
    const [newQuestion3, setNewQuestion3] = useState(<Question3 showQuestion3={showQuestion3} image={image} />);
    const [newQuestion4, setNewQuestion4] = useState(<Question4 showQuestion4={showQuestion4} image={image} />);
    const [newQuestion5, setNewQuestion5] = useState(<Question5 showQuestion5={showQuestion5} image={image} />);
    const [newQuestion6, setNewQuestion6] = useState(<Question6 showQuestion6={showQuestion6} image={image} />);
    const [newQuestion7, setNewQuestion7] = useState(<Question7 showQuestion7={showQuestion7} image={image} />);
    const [counterFinished, setCounterFinished] = useState(0);
    let finishedNumber = 0;

    function updateFinishedNumber() {
        finishedNumber++;
        setCounterFinished(finishedNumber);
    }
    function showQuestion() {
        setNewQuestion1(<DiscoverQuestion1 updateFinishedNumber={updateFinishedNumber} setNewQuestion1={setNewQuestion1} setImage={setImage} />);
    }
    function showQuestion2() {
        setNewQuestion2(<DiscoverQuestion2 updateFinishedNumber={updateFinishedNumber} setNewQuestion2={setNewQuestion2} setImage={setImage} />);
    }
    function showQuestion3() {
        setNewQuestion3(<DiscoverQuestion3 updateFinishedNumber={updateFinishedNumber} setNewQuestion3={setNewQuestion3} setImage={setImage} />);
    }
    function showQuestion4() {
        setNewQuestion4(<DiscoverQuestion4 updateFinishedNumber={updateFinishedNumber} setNewQuestion4={setNewQuestion4} setImage={setImage} />);
    }
    function showQuestion5() {
        setNewQuestion5(<DiscoverQuestion5 updateFinishedNumber={updateFinishedNumber} setNewQuestion5={setNewQuestion5} setImage={setImage} />);
    }
    function showQuestion6() {
        setNewQuestion6(<DiscoverQuestion6 updateFinishedNumber={updateFinishedNumber} setNewQuestion6={setNewQuestion6} setImage={setImage} />);
    }
    function showQuestion7() {
        setNewQuestion7(<DiscoverQuestion7 updateFinishedNumber={updateFinishedNumber} setNewQuestion7={setNewQuestion7} setImage={setImage} />);
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
            <Footer counterFinished={counterFinished} />
        </MainContent>
    );
}