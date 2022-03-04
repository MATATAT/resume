import { Grid, Stack } from "@mui/material";
import MainExperience from "./MainExperience";
import SideBar from "./SideBar";
import { Contact, Institution, Qualification } from "./types";

export interface BodyInfo {
    contact: Contact,
    education: Institution,
    qualifications: Array<Qualification>,
    experience: Array<Institution>
}

export default function Body(props: BodyInfo) {
    return (
        <Grid container flexWrap="wrap-reverse" sx={{
            bgcolor: 'white'
        }}>
            <Grid item lg={4} xs={12} sx={{
                bgcolor: '#f1f1f1',
                paddingBottom: 20
            }}>
                <SideBar
                    contact={props.contact}
                    education={props.education}
                    qualifications={props.qualifications} />
            </Grid>
            <Grid item lg={8} xs={12} sx={{
                paddingBottom: 10
            }}>
                <MainExperience
                    experience={props.experience} />
            </Grid>
        </Grid>
    );
}