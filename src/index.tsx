import React, {ReactElement} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!);

const Root: React.FC = (): ReactElement<any, any> | null => {
    return (
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
};

root.render(<Root />);
