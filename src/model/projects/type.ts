export interface menuProject{
    shape: string;
    width?: number;
    textAlignment?: 'left' | 'right' | 'center';
}

export interface project {
    key: string;
    title: string;
    colorTitle: 'green' | 'red' | 'yellow' | 'purple' | 'blue';
    type: typeProject;
    menu: menuProject;
    coverImage: string;
    projectImage: string;
    text: string;
    getInvolved: string;
    support: string;
}

export enum typeProject{
    national,
    international
}
