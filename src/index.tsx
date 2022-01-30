import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Content from './content.json';

ReactDOM.render(
    <React.StrictMode>
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
