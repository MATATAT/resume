import { Resume } from './types';
import Header from './Header';

import './App.css'
import { Grid, Stack } from '@mui/material';
import Body from './Body';

export default function App(props: Resume) {
    return (
        <Grid container sx={{
            bgcolor: '#313641'
        }}>
            <Grid item xs={0} sm={1} />
            <Grid item xs={12} sm={10} >
                <Header
                    name={props.name}
                    title={props.title} />
                <Body 
                    contact={props.contact}
                    qualifications={props.qualifications}
                    education={props.education}
                    experience={props.experience} />
            </Grid>
            <Grid item xs={0} sm={1} />
        </Grid>
    );
}
