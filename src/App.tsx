import { Resume } from './types';
import Header from './Header';

import './App.css';
import SideBar from './SideBar';
import MainExperience from './MainExperience';

export default function App(props: Resume) {
    return (
        <div className="App">
            <Header 
                name={props.name} 
                title={props.title} />
            <SideBar 
                contact={props.contact} 
                education={props.education} 
                qualifications={props.qualifications} />
            <MainExperience 
                experience={props.experience} />
        </div>
    );
}
