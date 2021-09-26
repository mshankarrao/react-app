import { useState } from "react";

/* textbox -- onchange - state- ui in the form of label 
    concepts explained here
        function based and 
         useState
*/

interface IProps {
    initNum: number;
}

export default function FCParent(props: IProps) {

    const [currentValue, setCurrentValue] = useState("");//userState accepts the initial value and it returns array
    // and here we are using array destructing to extract the value

    const [num, setNum] = useState(props.initNum);

    return (
        <>
            <input type="textbox" onChange={(event) => setCurrentValue(event.target.value)} />
            <label>{currentValue}</label>
            <br />
            <button onClick={() => setNum(num + 1)}>increment by 1</button>
            <label >{num}</label>
        </>
    )

}

export function FCPChild() {
    return (
        <div>Child to test import and export </div>
    )
}