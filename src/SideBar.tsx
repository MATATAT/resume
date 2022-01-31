import { Container, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import SideBlock from "./SideBlock";
import { Contact, Institution, Qualifications } from "./types";

import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

type IconType = OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string };

interface SideBarProps {
    contact: Contact,
    education: Institution,
    qualifications: Qualifications
}

type RenderFn = () => JSX.Element;

export default function SideBar(props: SideBarProps) {
    return (
        <Container>
            <SideBlock title="Contact" renderer={renderContact(props.contact)} />
            <SideBlock title="Education" renderer={renderEducation(props.education)} />
            <SideBlock title="Skills" renderer={renderSkills(props.qualifications)} />
        </Container>
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
        <div>
            <span>{props.url}</span>
            <Icon />
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

function renderSkills(props: Qualifications): RenderFn {
    return () => {
        return (
            <div>
                <div>
                    <h5>Languages</h5>
                    {props.languages.map((note) => {
                        return <div>{note}</div>;
                    })}
                </div>
                <div>
                    <h5>Tools</h5>
                    {props.tools.map((note) => {
                        return <div>{note}</div>;
                    })}
                </div>
            </div>
        );
    };
}