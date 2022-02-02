import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import SideBlock from "./SideBlock";
import { Contact, Institution, Qualification } from "./types";

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
    qualifications: Array<Qualification>
}

type RenderFn = () => JSX.Element;

export default function SideBar(props: SideBarProps) {
    return (
        <div className="SideBar">
            <SideBlock title="Contact" renderer={renderContact(props.contact)} />
            <SideBlock title="Education" renderer={renderEducation(props.education)} />
            <SideBlock title="Skills" renderer={renderSkills(props.qualifications)} />
        </div>
    );
}

function renderContact(props: Contact): RenderFn {
    return () => {
        return (
            <div>
                <LabelWithIcon url={props.email} icon={EmailIcon} />
                <LabelWithIcon url={props.phone} icon={PhoneIcon} />
                <LabelWithIcon url={props.location} icon={LocationOnIcon} />
                <LabelWithIcon url={props.websites.personal} icon={LanguageIcon} />
                <LabelWithIcon url={props.websites.linkedIn} icon={LinkedInIcon} />
                <LabelWithIcon url={props.websites.gitHub} icon={GitHubIcon} />
            </div>
        );
    }
}

function LabelWithIcon(props: { url: string, icon: IconType }) {
    const Icon = props.icon;
    return (
        <div className="SideBar-label-with-icon">
            <div className="SideBar-contact-label">{props.url}</div>
            <div className="SideBar-contact-icon">
                <Icon fontSize="small" />
            </div>
        </div>
    );
}

function renderEducation(props: Institution): RenderFn {
    return () => {
        return (
            <div>
                <div>{props.position}</div>
                <div>{props.name}</div>
                <div>{props.startDate} - {props.endDate}</div>
                <div>{props.location}</div>
            </div>
        );
    }
}

function renderSkills(props: Array<Qualification>): RenderFn {
    return () => {
        return (
            <div>
                {props.map((qualification) => {
                    return (
                        <div>
                            <div className="SideBar-skills-subtitle">{qualification.title}</div>
                            {qualification.children.map((note) => {
                                return <div className="SideBar-skills-item">{note}</div>;
                            })}
                        </div>
                    );
                })}
            </div>
        );
    };
}
