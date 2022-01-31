import { Resume } from './types';
import Header from './Header';

import SideBar from './SideBar';
import MainExperience from './MainExperience';
import { Grid, Box } from '@mui/material';

import './App.css'

export default function App(props: Resume) {
    return (
        <Box className='App'>
            <Header
                name={props.name} 
                title={props.title} />
            <Grid container spacing={3}>
                <Grid item xs={3.5}>
                    <SideBar 
                        contact={props.contact} 
                        education={props.education} 
                        qualifications={props.qualifications} />
                </Grid>
                <Grid item xs={6}>
                    <MainExperience 
                        experience={props.experience} />
                </Grid>
            </Grid>
        </Box>
    );
}
