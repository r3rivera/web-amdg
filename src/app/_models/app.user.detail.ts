import { AppBasicUser } from './app.user';


export interface AppUserPhone {
    number: string;
    countryCode: string;
    type: string;
}

export interface AppUserAddress{
    street1: string;
    street2: string;
    city: string;
    stateProvince: string;
    zipcode: string;
    country: string;
    type: string;
}

export interface AppUserDetails {
    userInfo: AppBasicUser;
    phoneDetails: AppUserPhone[];
    address: AppUserAddress[];
    verified: Boolean;
}

