import { Institution } from "./types";
import { Container } from "@mui/material";

export default function MainExperience(props: { experience: Array<Institution> }) {
    return (
        <Container maxWidth="md" >
            {props.experience.map(buildExperienceBlock)}
        </Container>
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