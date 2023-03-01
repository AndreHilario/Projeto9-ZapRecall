
import styled from "styled-components"
import DiscoverQuestion1 from "./DiscoverQuestion1";
import DiscoverQuestion2 from "./DiscoverQuestion2";
import DiscoverQuestion3 from "./DiscoverQuestion3";
import DiscoverQuestion4 from "./DiscoverQuestion4";
import DiscoverQuestion5 from "./DiscoverQuestion5";
import DiscoverQuestion6 from "./DiscoverQuestion6";
import DiscoverQuestion7 from "./DiscoverQuestion7";
import DiscoverQuestion8 from "./DiscoverQuestion8";
import { useState } from "react";
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";
import Question4 from "./Question4";
import Question5 from "./Question5";
import Question6 from "./Question6";
import Question7 from "./Question7";
import Question8 from "./Question8";

export default function Main() {

    const [newQuestion1, setNewQuestion1] = useState(<Question1 showQuestion={showQuestion}/>);
    const [newQuestion2, setNewQuestion2] = useState(<Question2 showQuestion2={showQuestion2}/>);
    const [newQuestion3, setNewQuestion3] = useState(<Question3 showQuestion3={showQuestion3}/>);
    const [newQuestion4, setNewQuestion4] = useState(<Question4 showQuestion4={showQuestion4}/>);
    const [newQuestion5, setNewQuestion5] = useState(<Question5 showQuestion5={showQuestion5}/>);
    const [newQuestion6, setNewQuestion6] = useState(<Question6 showQuestion6={showQuestion6}/>);
    const [newQuestion7, setNewQuestion7] = useState(<Question7 showQuestion7={showQuestion7}/>);
    const [newQuestion8, setNewQuestion8] = useState(<Question8 showQuestion8={showQuestion8}/>);
    

    function showQuestion() {
        setNewQuestion1(<DiscoverQuestion1 />)
    }
    function showQuestion2() {
        setNewQuestion2(<DiscoverQuestion2 />)
    }
    function showQuestion3() {
        setNewQuestion3(<DiscoverQuestion3 />)
    }
    function showQuestion4() {
        setNewQuestion4(<DiscoverQuestion4 />)
    }
    function showQuestion5() {
        setNewQuestion5(<DiscoverQuestion5 />)
    }
    function showQuestion6() {
        setNewQuestion6(<DiscoverQuestion6 />)
    }
    function showQuestion7() {
        setNewQuestion7(<DiscoverQuestion7 />)
    }
    function showQuestion8() {
        setNewQuestion8(<DiscoverQuestion8 />)
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
        </MainContent>
    );
}
const MainContent = styled.main`
    font-family: 'Recursive', sans-serif;
`