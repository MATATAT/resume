import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Content from './content.json';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from '@mui/material';

ReactDOM.render(
    <React.StrictMode>
        <CssBaseline />
        <App 
            name={Content.name}
            title={Content.title}
            contact={Content.contact} 
            experience={Content.experience}
            qualifications={Content.qualifications}
            education={Content.education} />
    </React.StrictMode>,
    document.getElementById('root')
);
