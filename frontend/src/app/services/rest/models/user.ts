interface IUser{
    id?: string;
    email: string;
    password: string;
}

export class User {
    user:IUser

    constructor(userInfo: IUser){
        this.user = userInfo
    }
}