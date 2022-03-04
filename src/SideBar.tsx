import { Stack, SvgIconTypeMap, useMediaQuery, useTheme } from "@mui/material";
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
import { Box } from "@mui/system";

type IconType = OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string };

interface SideBarProps {
    contact: Contact,
    education: Institution,
    qualifications: Array<Qualification>
}

type RenderFn = () => JSX.Element;

export default function SideBar(props: SideBarProps) {
    const theme = useTheme();
    const largeScreen = useMediaQuery(theme.breakpoints.up('lg'));

    return (
        // <div className="SideBar">
        //     <SideBlock title="Contact" renderer={renderContact(props.contact)} />
        //     <SideBlock title="Education" renderer={renderEducation(props.education)} />
        //     <SideBlock title="Skills" renderer={renderSkills(props.qualifications)} />
        // </div>
        <Box sx={{
            textAlign: (largeScreen) ? 'right' : 'left',
            bgcolor: '#f1f1f1',
            paddingRight: 2,
            paddingLeft: 2
        }}>
            <SideBlock title="Contact" renderer={renderContact(props.contact, largeScreen)} />
            <SideBlock title="Education" renderer={renderEducation(props.education)} />
            <SideBlock title="Skills" renderer={renderSkills(props.qualifications)} />
        </Box>
    );
}

function renderContact(props: Contact, largeScreen: boolean): RenderFn {
    return () => {
        return (
            <>
                <LabelWithIcon url={props.email} icon={EmailIcon} largeScreen={largeScreen} />
                <LabelWithIcon url={props.phone} icon={PhoneIcon} largeScreen={largeScreen} />
                <LabelWithIcon url={props.location} icon={LocationOnIcon} largeScreen={largeScreen} />
                <LabelWithIcon url={props.websites.personal} icon={LanguageIcon} largeScreen={largeScreen} />
                <LabelWithIcon url={props.websites.linkedIn} icon={LinkedInIcon} largeScreen={largeScreen} />
                <LabelWithIcon url={props.websites.gitHub} icon={GitHubIcon} largeScreen={largeScreen} />
            </>
        );
    }
}

function LabelWithIcon(props: { url: string, icon: IconType, largeScreen: boolean }) {
    const Icon = props.icon;
    return (
        <Stack direction={(props.largeScreen ? 'row-reverse' : 'row')} spacing={1}>
            <Icon sx={{
                marginTop: 0.4
            }} fontSize="small" />
            <Box>{props.url}</Box>
        </Stack>
        // <Stack direction={(props.largeScreen ? 'row' : 'row-reverse')}>
        //     <div >{props.url}</div>
        //     {/* <Icon fontSize="small" /> */}
        // </Stack>
    )

    // TODO: Better way to do this?
    // return (props.largeScreen) ? (
    //     <div className="SideBar-label-with-icon">
    //         <div className="SideBar-contact-label">{props.url}</div>
    //         <div className="SideBar-contact-icon">
    //             <Icon fontSize="small" />
    //         </div>
    //     </div>
    // ) : (
    //     <Box>
    //         <div className="SideBar-contact-icon">
    //             <Icon fontSize="small" />
    //         </div>
    //         <div className="SideBar-contact-label">{props.url}</div>
    //     </Box>
    // );
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
