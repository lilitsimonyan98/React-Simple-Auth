import React, {ReactNode, createContext, useReducer} from 'react';
import {authReducer} from '../reducers/authReducer';

interface Props {
    children: ReactNode;
}

export const AuthContext = createContext<any>(null);

const AuthContextProvider: React.FC<Props> = ({children}) => {
    let isAuth: boolean = false;
    if (localStorage.getItem('token')) {
        isAuth = true;
    }
    const [state, dispatch] = useReducer(authReducer, {authenticated: isAuth});

    return <AuthContext.Provider value={{state, dispatch}}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
