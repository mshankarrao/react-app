import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { AppState } from "./AppState";
import "./ClassSearch.css";
import { UserReducer } from "./UserReducer";
import { IStatusizedUsers, IUsers } from "./UsersReducer";

export default function UsersReducerUI() {
    const dispatch = useDispatch();
    const history = useHistory();

    //accessing the date from the reducer
    const usersReducer: IStatusizedUsers = useSelector((state: AppState) => state?.usersReducer);
    useEffect(() => {
        async function api() {
            dispatch({ type: "started", payload: [] });
            const response = await fetch("https://reqres.in/api/users");
            if (response.ok) {
                const json = await response.json();
                //passing the data to reducer
                dispatch({ type: "CompleteUsers", payload: json.data });
            }
        }
        if (usersReducer.loading === "not started") api();
    }, []);

    return (
        <>
            {usersReducer.loading !== "completed" && <div>loading...</div>}
            {usersReducer.loading === "completed" && renderPersons()}
        </>);


    function renderPersons() {
        return (
            <>
                <div className="grid-container">
                    {usersReducer.users.map(renderPerson)}
                </div>
                <button onClick={() => history.push("/checkReducer")}>Check Reducer</button>
            </>
        )
    }

    function renderPerson(person: IUsers, index: number) {
        return (
            <div className="grid-item" key={index}>
                <img src={person.avatar} alt="" />
                <div>{person.first_name + person.last_name}</div>
                <div>{person.email}</div>
            </div>
        )
    }




}