import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./AppState";
import { IUser } from "./UserReducer";

export default function StoreData() {
    const dispatch = useDispatch();

    //accessing the date from the reducer
    const userReducer: IUser = useSelector((state: AppState) => state?.userReducer)
    useEffect(() => {
        async function api() {
            const response = await fetch("https://reqres.in/api/users");
            if (response.ok) {
                const json = await response.json();
                //passing the data to reducer
                dispatch({ type: "name", payload: json.data[0].first_name + json.data[0].last_name, });
            }
        }
        api();
    }, []);

    return <div>{userReducer?.name}</div>;
}