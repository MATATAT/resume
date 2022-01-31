import { Box, Grid, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import SideBlock from "./SideBlock";
import { Contact, Institution, Qualifications } from "./types";

import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import './SideBar.css';

type IconType = OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string };

interface SideBarProps {
    contact: Contact,
    education: Institution,
    qualifications: Qualifications
}

type RenderFn = () => JSX.Element;

export default function SideBar(props: SideBarProps) {
    return (
        <Box className="SideBar">
            <SideBlock title="Contact" renderer={renderContact(props.contact)} />
            <SideBlock title="Education" renderer={renderEducation(props.education)} />
            <SideBlock title="Skills" renderer={renderSkills(props.qualifications)} />
        </Box>
    );
}

function renderContact(props: Contact): RenderFn {
    return () => {
        return (
            <Grid container spacing={0.5}>
                <LabelWithIcon url={props.email} icon={EmailIcon} />
                <LabelWithIcon url={props.phone} icon={PhoneIcon} />
                <LabelWithIcon url={props.location} icon={LocationOnIcon} />
                <LabelWithIcon url={props.websites.personal} icon={LanguageIcon} />
                <LabelWithIcon url={props.websites.linkedIn} icon={LinkedInIcon} />
                <LabelWithIcon url={props.websites.gitHub} icon={GitHubIcon} />
            </Grid>
        );
    }
}

function LabelWithIcon(props: { url: string, icon: IconType }) {
    const Icon = props.icon;
    return (
        <>
            <Grid item xs={11}>
                <div className="SideBar-contact-label">{props.url}</div>
            </Grid>
            <Grid item xs={1}>
                <Icon className="SideBar-contact-icon" fontSize="small" />
            </Grid>
        </>
    );
}

function renderEducation(props: Institution): RenderFn {
    return () => {
        return (
            <div className="SideBar-education">
                <div>{props.position}</div>
                <div>{props.name}</div>
                <div className="SideBar-education-subtitle">{props.startDate} - {props.endDate}</div>
                <div className="SideBar-education-subtitle">{props.location}</div>
            </div>
        );
    }
}

function renderSkills(props: Qualifications): RenderFn {
    return () => {
        return (
            <div>
                <div>
                    <div className="SideBar-skills-subtitle">Languages</div>
                    {props.languages.map((note) => {
                        return <div className="SideBar-skills-item">{note}</div>;
                    })}
                </div>
                <div>
                    <div className="SideBar-skills-subtitle">Tools</div>
                    {props.tools.map((note) => {
                        return <div className="SideBar-skills-item">{note}</div>;
                    })}
                </div>
            </div>
        );
    };
}