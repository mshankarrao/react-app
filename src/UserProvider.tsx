import React, { createContext, useEffect, useState } from "react";
import firebase from "firebase/app";
import LoadingSpinner from "./LoadingSpinner";


interface IProps {
    children: React.ReactNode;
}

export const UserContext = createContext<firebase.User | null>(null);

export default function UserProvider(props: IProps) {
    const [user, setUser] = useState<firebase.User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user: firebase.User | null) => {
            setUser(user);
            setLoading(false);
        })
    }, []);

    return (
        <UserContext.Provider value={user}>{loading && <LoadingSpinner />} {!loading && props.children}</UserContext.Provider>
    )
}

