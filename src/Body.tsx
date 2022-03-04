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
            bgcolor: 'white',
            paddingBottom: 15
        }}>
            <Grid item lg={4} xs={12}>
                <SideBar
                    contact={props.contact}
                    education={props.education}
                    qualifications={props.qualifications} />
            </Grid>
            <Grid item lg={8} xs={12}>
                <MainExperience
                    experience={props.experience} />
            </Grid>
        </Grid>
    );
}