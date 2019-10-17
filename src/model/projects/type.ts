export interface menuProject{
    shape: string;
    width?: number;
    textAlignment?: 'left' | 'right' | 'center';
}

export interface project {
    key: string;
    title: string;
    type: typeProject;
    menu: menuProject;
}

export enum typeProject{
    national,
    international
}
