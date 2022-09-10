//import metodenya
import { createContext, useReducer } from "react";

export const UserContextToken = createContext();

const initialState = {
    isLogin: false,
    user: {},
};

const reducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "USER_SUCCESS":
        case "LOGIN_SUCCESS":
            localStorage.setItem("token", payload.token);
            return {
                isLogin: true,
                user: payload,
            };

        case "AUTH_ERROR":
        case "LOGOUT":
            // Remove item token from localStorage here ...
            localStorage.removeItem("token");
            return {
                isLogin: false,
                user: {},
                isSub: false,
            };

        case "SHOW_MODAL":
            return {
                modal: true,
                show: payload,
            };
        case "NOT_SHOW":
            return {
                modal: false,
                show: {},
            };
        default:
            throw new Error();
    }
};

export const ShowContextTokenProvider = ({ children }) => {
    const [state, dispacth] = useReducer(reducer, initialState);
    return (
        <UserContextToken.Provider value={[state, dispacth]}>
            {children}
        </UserContextToken.Provider>
    );
};
