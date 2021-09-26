import { createContext, useContext, useState } from "react";

/*
textbox --> onchange --> state --> all child components using usecontext
*/

interface IUserContext {
    userName: string;
}

const UserContext = createContext<IUserContext>({ userName: "" })
export default function UseContextEx() {
    const [userName, setUserName] = useState("");
    return (
        <>
            <input type="textbox"
                onChange={(event) => setUserName(event.target.value)}
            />
            <UserContext.Provider value={{ userName: userName }}>
                <ChildContext />
            </UserContext.Provider>
        </>
    )
}

function ChildContext() {
    const userContext = useContext(UserContext);
    return <label >{userContext.userName}</label>
}