import { Contact, Institution, Notes } from "./types";


// contact, education, skills
interface SideBarProps {
    contact: Contact,
    education: Institution,
    qualifications: Notes
}

export default function SideBar(props: SideBarProps) {
    return (
        <div></div>
    );
}