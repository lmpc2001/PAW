interface IClient {
    id?: string;
    userId?: string;
    employee_id?: string;
    name: string;
    phone_number: string;
    email: string;
    password: string;
}

export class Client {
    client:IClient

    constructor(clientInfo: IClient){
        this.client = clientInfo
    }
}