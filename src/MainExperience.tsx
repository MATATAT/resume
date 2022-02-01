import { Institution } from "./types";

import './MainExperience.css'

export default function MainExperience(props: { experience: Array<Institution> }) {
    return (
        <div className="MainExperience">
            <div className="MainExperience-title">Work Experience</div>
            {props.experience.map(buildExperienceBlock)}
        </div>
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