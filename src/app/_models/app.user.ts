

export interface AppUser {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    token: string;
    roles: string[];
}

export interface AppBasicUser{
    username: string;
    firstName: string;
    lastName: string;
    birthDate: string;
    gender: string;
}

