import firebase from 'firebase/app';


export enum UserStatus {
    Unknown,
    SignedIn,
    SignedOut
}

export class UserState {
    readonly status: UserStatus;
    readonly value: firebase.User | undefined | null;
    constructor(value: firebase.User | undefined | null) {
        this.status =
            value === undefined ? UserStatus.Unknown :
                value === null ? UserStatus.SignedOut :
                    UserStatus.SignedIn;
        this.value = value;
    }
}
