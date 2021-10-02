import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { IStatusizedUsers, IUsers } from "./UsersReducer";
import { AppState } from "./AppState";

export default function CheckReducer() {
    const history = useHistory();
    const usersReducer: IStatusizedUsers = useSelector((state: AppState) => state?.usersReducer);
    return (
        <>
            <div>
                {usersReducer.users.length}
            </div>
            <button onClick={() => history.goBack()}>Go Back</button>
        </>
    )
}