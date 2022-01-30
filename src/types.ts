export interface Resume {
    name: string,
    title: string,
    contact: Contact,
    experience: Array<Institution>,
    qualifications: Notes,
    education: Institution
}

export interface Contact {
    location: string,
    phone: string,
    websites: Websites
}

export interface Websites {
    personal: string,
    linkedIn: string,
    gitHub: string
}

export interface Institution {
    name: string,
    location: string,
    startDate: string,
    endDate: string,
    notes: Notes
}

export type Notes = Array<string>;