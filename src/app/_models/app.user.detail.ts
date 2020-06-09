import { AppBasicUser } from './app.user';


export class AppUserPhone {
    number: string;
    countryCode: string;
    type: string;
}

export class AppUserAddress{
    street1: string;
    street2: string;
    city: string;
    stateProvince: string;
    zipcode: string;
    country: string;
    type: string;
}

export class AppUserDetails {
    userInfo: AppBasicUser;
    phoneDetails: AppUserPhone[];
    address: AppUserAddress[];
    verified: Boolean;
}