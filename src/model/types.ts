export interface Person {
    name: string;
    email: string;
    phone: number;
    password: string;
    address: Address;
    projects: Project[];
    prayers: Pray[];
}

export interface Address {
    addressLine: string;
    city: string;
    state: string;
}

export interface Project {
    id: number;
    name: string;
}

export interface Pray {
    country: Country;
    registeredDate: Date;
}

export type Countries = Country[];

export interface Country {
    id: number;
    name: string;
}
