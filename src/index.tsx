import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from '@mui/material';

const content_url = "https://raw.githubusercontent.com/MATATAT/website-content/main/content.json";

fetch(content_url).then((response) => {
    if (!response.ok) {
        return Promise.reject('Oops, there was a problem getting content!');
    }

    return response.json()
}).then((configuration) => {
    ReactDOM.render(
        <React.StrictMode>
            <CssBaseline />
            <App 
                name={configuration.name}
                title={configuration.title}
                contact={configuration.contact} 
                experience={configuration.experience}
                qualifications={configuration.qualifications}
                education={configuration.education} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}).catch((reason: string) => {
    const root = document.getElementById('root');
    if (!root) { return; } // Can't write error
    
    root.innerText = reason;
});
