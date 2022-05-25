interface IAccount {
    id?: string;
    points: number;
    transfer_description: string;
}

export class Account {
    account: IAccount

    constructor(accountInfo: IAccount) {
        this.account = accountInfo
    }
}