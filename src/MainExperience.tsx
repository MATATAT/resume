import { Institution } from "./types";

import './MainExperience.css'
import { Box } from "@mui/material";

export default function MainExperience(props: { experience: Array<Institution> }) {
    return (
        <Box sx={{
            fontSize: 14,
            bgcolor: 'white',
            paddingLeft: 2,
            paddingRight: 2
        }}>
            <div className="MainExperience-title">Work Experience</div>
            {props.experience.map(buildExperienceBlock)}
        </Box>
        // <div className="MainExperience">
        //     <div className="MainExperience-title">Work Experience</div>
        //     {props.experience.map(buildExperienceBlock)}
        // </div>
    );
}

function buildExperienceBlock(experience: Institution) {
    return (
        <>
            <div className="MainExperience-position">{experience.position}</div>
            <div>
                <div>{experience.name}</div>
                <div>{experience.startDate} - {experience.endDate || 'Current'} / {experience.location}</div>
            </div>
            <ul className="MainExperience-list">
                {experience.notes.map((note) => {
                    return (
                        <li>{note}</li>
                    );
                })}
            </ul>
        </>
    )
}