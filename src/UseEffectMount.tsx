import { useEffect, useState } from "react";

export default function UseEffectMount() {
    const [title, setTitle] = useState("");

    useEffect(() => {
        async function api() {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos/2");
            const json = await response.json();
            setTitle(json.title);
        }
        api()
    }, []);//we gave as empty array so that it will call only once in its lifecycle and it behaves as componentdidmount

    return <label>{title}</label>
}