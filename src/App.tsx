import { Resume } from './types';
import Header from './Header';

import './App.css';
import SideBar from './SideBar';
import MainExperience from './MainExperience';
import { Grid } from '@mui/material';

export default function App(props: Resume) {
    return (
        <div>
            <Header
                name={props.name} 
                title={props.title} />
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <SideBar 
                        contact={props.contact} 
                        education={props.education} 
                        qualifications={props.qualifications} />
                </Grid>
                <Grid item xs={8}>
                    <MainExperience 
                        experience={props.experience} />
                </Grid>
            </Grid>
        </div>
    );
}
