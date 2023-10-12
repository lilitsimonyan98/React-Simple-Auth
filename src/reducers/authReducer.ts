export enum AuthActionEnum {
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
}

interface AuthAction {
    type: AuthActionEnum;
    payload: ActionPayload;
}

interface ActionPayload {
    token: string;
}

interface AuthState {
    authenticated: boolean;
}

export const authReducer = (state: AuthState, action: AuthAction) => {
    switch (action.type) {
        case AuthActionEnum.LOGIN:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                value: true,
            };
        case AuthActionEnum.LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                value: false,
            };
        default:
            return state;
    }
};

export const login = (token: string) => ({
    type: AuthActionEnum.LOGIN,
    payload: {token: token},
});

export const logout = () => ({
    type: AuthActionEnum.LOGOUT,
});
