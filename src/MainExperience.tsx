import { Box } from "@mui/material";
import { Institution } from "./types";

export default function MainExperience(props: { experience: Array<Institution> }) {
    return (
        <Box >
            <div>Work Experience</div>
            {props.experience.map(buildExperienceBlock)}
        </Box>
    );
}

function buildExperienceBlock(experience: Institution) {
    return (
        <div>
            <div>{experience.position}</div>
            <div>{experience.name}</div>
            <div>{experience.startDate} - {experience.endDate ?? 'Current'} / {experience.location}</div>
            <ul>
                {experience.notes.map((note) => {
                    return (
                        <li>{note}</li>
                    );
                })}
            </ul>
        </div>
    )
}