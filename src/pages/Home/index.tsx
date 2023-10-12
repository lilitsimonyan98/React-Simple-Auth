import {Box, Button, Typography} from '@mui/material';
import React, {useContext} from 'react';
import {AuthContext} from '../../contexts/AuthContext';
import {logout} from '../../reducers/authReducer';
import {useNavigate} from 'react-router-dom';

const Home: React.FC = () => {
    const {dispatch} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

    return (
        <Box sx={{display: 'flex', justifyContent: 'center', height: '90vh', alignItems: 'center'}}>
            <Box sx={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
                <Typography fontSize={'30px'}>Hello Marcus</Typography>
                <Button fullWidth variant="contained" sx={{mt: 3, mb: 2}} onClick={handleLogout}>
                    Logout
                </Button>
            </Box>
        </Box>
    );
};

export default Home;
