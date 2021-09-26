import { useEffect, useState } from "react";

/*
textbox --> onchanhe--> state --> useEffect --> invoke the api --> state
*/

export default function UseEffectUpdate() {
    const [num, setNum] = useState(1);
    const [title, setTitle] = useState("");

    //making it behaves as component did update 
    useEffect(() => {
        async function api() {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos/" + num);
            if (response.ok) {
                const json = await response.json();
                setTitle(json.title)
            }
            else {
                setTitle("There was an error");
            }
        }
        api()
    }, [num]);//here we are no giving empty array but passing num and whenever its changing the useeffect will ve called and work as component did update

    return (
        <>
            <input type="text" onChange={(event) => setNum(Number(event.target.value))} />
            <label>{title}</label>
        </>
    )
}