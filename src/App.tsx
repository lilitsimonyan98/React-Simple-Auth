import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {CssBaseline, ThemeProvider, createTheme} from '@mui/material';
import {RenderRoutes} from './components/routes/RenderRoutes';
import {CheckAccess} from './components/routes/CheckAccess';
import AuthContextProvider from './contexts/AuthContext';

const defaultTheme = createTheme();

const App = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <AuthContextProvider>
                <BrowserRouter>
                    <CheckAccess>
                        <RenderRoutes />
                    </CheckAccess>
                </BrowserRouter>
            </AuthContextProvider>
        </ThemeProvider>
    );
};

export default App;
