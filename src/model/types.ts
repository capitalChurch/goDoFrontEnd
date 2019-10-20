import {Component} from 'vue-router/types/router';

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

export enum routeEnum{
    Hub,
    Home,
    Login,
    Profile,
    CreateAccount,
    ForgetPassword,
    Contact,
    Pray,
    GetInvolved,
    Project,
    Peace,
    SupportUs,
    EventDetail,
    AboutUs,
}

export interface routes {
    id: routeEnum;
    path: string;
    component: Component;
}


declare global{
    interface Array<T> {
        findOrFirst: (predicate: (obj: T) => boolean) => T
    }
}

Array.prototype.findOrFirst = function<T>(predicate: (obj: T) => boolean): T {
    return this.find(predicate) || this[0];
};
