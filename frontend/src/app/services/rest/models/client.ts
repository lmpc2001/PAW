interface IClient{
    id: string;
    userId?: string;
    employee_id?: string;
    name: string;
    phone_Number: string;
}

export class Client {
    client:IClient

    constructor(clientInfo: IClient){
        this.client = clientInfo
    }
}