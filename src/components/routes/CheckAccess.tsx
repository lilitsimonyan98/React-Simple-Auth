import React, {ReactNode, useContext, useEffect} from 'react';
import {AuthContext} from '../../contexts/AuthContext';
import {useLocation, useNavigate} from 'react-router-dom';

interface Props {
    children: ReactNode;
}

export const CheckAccess: React.FC<Props> = ({children}) => {
    const {state} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/login' && state.authenticated) {
            navigate('/');
        }
        if (!state.authenticated) {
            navigate('/login');
        }
    }, []);

    return <>{children}</>;
};
