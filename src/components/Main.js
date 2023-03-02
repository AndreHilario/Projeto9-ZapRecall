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

    const [endImage, setEndImage] = useState(true);
    const [newQuestion1, setNewQuestion1] = useState(<Question1 showQuestion={showQuestion} endImage={endImage} />);
    const [newQuestion2, setNewQuestion2] = useState(<Question2 showQuestion2={showQuestion2} endImage={endImage} />);
    const [newQuestion3, setNewQuestion3] = useState(<Question3 showQuestion3={showQuestion3} endImage={endImage} />);
    const [newQuestion4, setNewQuestion4] = useState(<Question4 showQuestion4={showQuestion4} endImage={endImage} />);
    const [newQuestion5, setNewQuestion5] = useState(<Question5 showQuestion5={showQuestion5} endImage={endImage} />);
    const [newQuestion6, setNewQuestion6] = useState(<Question6 showQuestion6={showQuestion6} endImage={endImage} />);
    const [newQuestion7, setNewQuestion7] = useState(<Question7 showQuestion7={showQuestion7} endImage={endImage} />);
    const [newQuestion8, setNewQuestion8] = useState(<Question8 showQuestion8={showQuestion8} endImage={endImage} />);

    const [counterFinished, setCounterFinished] = useState(0);
    let finishedNumber = 0;

    function endTest() {
        finishedNumber++;
        setCounterFinished(finishedNumber);
        setNewQuestion1(<Question1 />);
        setEndImage(false);
    }
    function endTest2() {
        finishedNumber++;
        setCounterFinished(finishedNumber);
        setNewQuestion2(<Question2 />);
        setEndImage(false);
    }
    function endTest3() {
        finishedNumber++;
        setCounterFinished(finishedNumber);
        setNewQuestion3(<Question3 />);
        setEndImage(false);
    }
    function endTest4(value) {
        console.log(value)
        finishedNumber++;
        setCounterFinished(finishedNumber);
        setNewQuestion4(<Question4 />);
        setEndImage(false);
    }
    function endTest5() {
        finishedNumber++;
        setCounterFinished(finishedNumber);
        setNewQuestion5(<Question5 />);
        setEndImage(false);
    }
    function endTest6() {
        finishedNumber++;
        setCounterFinished(finishedNumber);
        setNewQuestion6(<Question6 />);
        setEndImage(false);
    }
    function endTest7() {
        finishedNumber++;
        setCounterFinished(finishedNumber);
        setNewQuestion7(<Question7 />);
        setEndImage(false);
    }
    function endTest8() {
        finishedNumber++;
        setCounterFinished(finishedNumber);
        setNewQuestion8(<Question8 />);
        setEndImage(false);
    }

    function showQuestion() {
        setNewQuestion1(<DiscoverQuestion1 endTest={endTest} />)
    }
    function showQuestion2() {
        setNewQuestion2(<DiscoverQuestion2 endTest2={endTest2} />)
    }
    function showQuestion3() {
        setNewQuestion3(<DiscoverQuestion3 endTest3={endTest3} />)
    }
    function showQuestion4() {
        setNewQuestion4(<DiscoverQuestion4 endTest4={endTest4} />)
    }
    function showQuestion5() {
        setNewQuestion5(<DiscoverQuestion5 endTest5={endTest5} />)
    }
    function showQuestion6() {
        setNewQuestion6(<DiscoverQuestion6 endTest6={endTest6} />)
    }
    function showQuestion7() {
        setNewQuestion7(<DiscoverQuestion7 endTest7={endTest7} />)
    }
    function showQuestion8() {
        setNewQuestion8(<DiscoverQuestion8 endTest8={endTest8} />)
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