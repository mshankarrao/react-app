import { useRef } from "react";


/*
Props from parent to child 
useref data from child to parent
*/

export default function UseRefEx() {
    const ref = useRef<HTMLInputElement>(null);
    return (
        <>
            <input type="text" ref={ref} onChange={(event) => alert(ref.current?.value)}/>
            <label >{ref.current?.value}</label>
        </>
    )
}