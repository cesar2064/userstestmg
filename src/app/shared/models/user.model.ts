export interface UserModel {
    gender: string;
    name: UserName;
    location: UserLocation;
    email: string;
    login: UserLogin;
    dob: UserDates;
    registered: UserDates;
    phone: string;
    cell: string;
    id: UserId;
    picture: UserPicture;
    nat: string;
}

export interface UserListResponseModel {
    results: UserModel[];
    info: {
        seed: string;
        results: number;
        page: number;
        version: string;
      }
}

export interface UserName {
    title: string;
    first: string;
    last: string;
}

export interface UserLocation {
    street: string;
    city: string;
    state: string;
    postcode: string;
    coordinates: UserLocationCoordinates;
}

export interface UserLocationCoordinates {
    latitude: string;
    longitude: string;
}

export interface UserLocationTimeZone {
    offset: string;
    description: string;
}

export interface UserLogin {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
}

export interface UserDates {
    date: string;
    age: number;
}

export interface UserId {
    name: string;
    value: string;
}

export interface UserPicture {
    large: string;
    medium: string;
    thumbnail: string;
}