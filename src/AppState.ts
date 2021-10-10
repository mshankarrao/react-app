//We will do setup for the reducer

import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { HotelReducer } from "./HotelReducer";
import { UserReducer } from "./UserReducer";
import { UsersReducer } from "./UsersReducer";


export const rootReducer = combineReducers({
    userReducer: UserReducer,
    usersReducer: UsersReducer,
    hotelReducer: HotelReducer
})

export type AppState = ReturnType<typeof rootReducer>;

export const configureStore = () => {
    return createStore(rootReducer, {}, devToolsEnhancer({}));
}

//useSelector --> AppState  --> userReducer --> name
//useSelector --> AppState  --> swiggyReducer --> hotelName

/*
reducer1 --> table --> user names
reducer2 --> table --> user salary

app state = union of user name and user salary

AppState.tableName.attributeName
AppState.userReducer.userName

*/

