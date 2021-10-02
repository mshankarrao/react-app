export interface IUser {
    name: string;
}

interface IUserAction {
    type: string;
    payload: string;
}

export const UserReducer = (state: IUser, action: IUserAction): IUser => {
    switch (action.type) {
        case "name":
            return { ...state, name: action.payload };
        //state.name = action.payload; return state;  we cannot modify directly
    }

    return { name: "" };
}